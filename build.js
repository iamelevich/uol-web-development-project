const builder = require('./builder');

builder
    .destination('./docs')     // destination directory
    .build(function(err) {      // build process
        if (err) throw err;       // error handling is required
    });