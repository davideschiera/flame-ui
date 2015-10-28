import Ember from 'ember';
import SPanel from '../components/sd-panel';

export default SPanel.extend({
    classNames: [ 'transactions-table' ],
    selected:   null,

    actions: {
        select: function(node, view) {
            var me    = this;
            var defer = Ember.RSVP.defer();
            defer.promise.then(
                function(){
                    // Table has selection
                    me.set('selected', node);
                },
                function(){
                    // Table has not selection
                    me.set('selected', null);
                }
            );
            this.sendAction('select', node, view, defer);
        }
    }
});
