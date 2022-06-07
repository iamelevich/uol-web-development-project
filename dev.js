const builder = require('./builder');
const watch       = require('metalsmith-watch');
const metalsmithExpress = require('metalsmith-express');

builder
    .destination('./docs')     // destination directory
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