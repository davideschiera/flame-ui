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

    app.import(app.bowerDirectory + '/d3/d3.v2.js');

    return app.toTree();
};
