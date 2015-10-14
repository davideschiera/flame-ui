/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

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

    return app.toTree();
};
