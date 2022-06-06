const Metalsmith  = require('metalsmith');
const inPlace     = require('@metalsmith/in-place');
const watch       = require('metalsmith-watch');
const metalsmithExpress = require('metalsmith-express');
const sass = require("metalsmith-sass");

Metalsmith(__dirname)
    .metadata({
        title: "Fun Village - Amusement Park",
        events: [
            {
                title: 'Grand Opening',
                desc: 'Fun Village has opened as of 01/05/2022',
                img: 'img/grandopeningbannerfp.png'
            },
            {
                title: 'Reduces prices',
                desc: 'See the amazing special offers available',
                img: 'img/SpecialsBanner.png'
            },
            {
                title: 'Extended operating hours',
                desc: 'During the month of May extended hours',
                img: 'img/ExtendedHoursBanner.png'
            },
        ],
        facilities: [
            {
                title: 'Discover More',
                desc: 'Here are extra fun time you can enjoy and spend time with your family and friends aside our rides.',
                img: 'img/discover.jpeg',
            },
            {
                title: 'Food & beverage',
                desc: 'Dining options to match your stomach, from burgers and tacos to salads and sodas.',
                img: 'img/foodbeverage.jpg',
            },
            {
                title: 'Shops',
                desc: 'Retail outlets from world wide brands for forgotten swimwear and souvenirs.',
                img: 'img/shops.jpg',
            },
            {
                title: 'Hotels',
                desc: 'Laxuary suite rooms are on discount with the park ticket. Beuatiful bay view is all for you.',
                img: 'img/hotel.jpg',
            },
        ],
    })
    .source('./src')            // source directory
    .destination('./build')     // destination directory
    .clean(true)                // clean destination before
    .use(inPlace())
    .use(sass({
        outputStyle: "expanded",
        outputDir: "css/"
    }))
    .use(metalsmithExpress())
    .use(
        watch({
          paths: {
            "${source}/**/*": "**/*",
            "layouts/**/*": "**/*"
          },
          livereload: true,
        })
    )
    .build(function(err) {      // build process
        if (err) throw err;       // error handling is required
    });