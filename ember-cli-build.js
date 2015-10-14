/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        fingerprint: {
            //
            // Disable fingerprinting since we're going to inline content anyway
            //
            enabled: false
        },
        SRI: {
            //
            // Disable integrity check. For more information, refer to https://github.com/jonathanKingston/ember-cli-sri
            //
            enabled: false
        }
    });

    app.import(app.bowerDirectory + '/d3/d3.v2.js');
    app.import(app.bowerDirectory + '/reset-css/reset.css');

    // Copy Roboto webfont:
    var robotoAssets = new Funnel('vendor/roboto', {
        srcDir: '/',
        include: ['*.woff', '*.woff2', '*.eot', '*.svg', '*.ttf', ],
        destDir: '/assets/fonts'
    });
    app.import('vendor/roboto/stylesheet.css');

    var iconsAssets = new Funnel(app.bowerDirectory + '/material-design-icons-iconfont/dist/fonts', {
        srcDir: '/',
        include: ['*.woff', '*.woff2', '*.eot', '*.svg', '*.ttf', ],
        destDir: '/assets/fonts'
    });
    app.import(app.bowerDirectory + '/material-design-icons-iconfont/dist/material-design-icons.css');

    return app.toTree(robotoAssets, iconsAssets);
};
