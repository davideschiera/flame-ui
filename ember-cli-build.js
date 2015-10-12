/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        fingerprint: {
            //
            // Disable fingerprinting since we're going to inline content anyway
            //
            enabled: false
        }
    });

    if (app.env === 'production') {
        //
        // Inline Javascript and CSS files inline
        //
        app.options.inlineContent = {
            'app-js':       'dist/assets/flame-ui.js',
            'app-css':      'dist/assets/flame-ui.css',
            'vendor-js':    'dist/assets/vendor.js',
            'vendor-css':   'dist/assets/vendor.css'
        };
    } else {
        //
        // Leave Javascript and CSS outside the HTML for easier debugging
        //
        app.options.inlineContent = {
            'app-js': {
                content: '<script src="assets/flame-ui.js"></script>'
            },
            'app-css': {
                content: '<link rel="stylesheet" href="assets/flame-ui.css">'
            },
            'vendor-js': {
                content: '<script src="assets/vendor.js"></script>'
            },
            'vendor-css': {
                content: '<link rel="stylesheet" href="assets/vendor.css">'
            }
        };
    }

    app.import(app.bowerDirectory + '/d3/d3.v2.js');

    return app.toTree();
};
