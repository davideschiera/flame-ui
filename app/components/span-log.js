import Ember from 'ember';
import SDPanel from '../components/sd-panel';

export default SDPanel.extend({
    classNames: [ 'span-log' ],

    lines: Ember.computed('log', function() {
        var log = this.get('log');
        if (!log) return;
        return this.get('log').map(function(line) {
            return Ember.$.extend(line, {
                color: new Ember.Handlebars.SafeString('color: ' + line.col),
                lineColor: new Ember.Handlebars.SafeString('color: ' + line.contCol)
            });
        });
    }),

    actions: {
        selectMode(mode) {
            this.sendAction('selectMode', mode);
        }
    }
});
