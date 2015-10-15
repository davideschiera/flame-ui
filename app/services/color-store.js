/* global d3 */

import Ember from 'ember';

export default Ember.Service.extend({
    init() {
        this._super.apply(this, arguments);

        this.setProperties({
            colors:             d3.scale.category10(),
            lastColorIndex:     0,
            containerNames:     {},
            containerNameList:  [],
        });
    },

    assignColor(containerName) {
        var containerNames = this.get('containerNames');
        var color = containerNames[containerName];
        if (color === undefined) {
            color = this.get('colors')(this.get('lastColorIndex'));
            containerNames[containerName] = color;
            this.get('containerNameList').pushObject(containerName);
            this.incrementProperty('lastColorIndex');
        }

        return color;
    }
});