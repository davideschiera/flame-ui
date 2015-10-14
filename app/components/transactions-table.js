import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        select: function(node, view) {
            this.sendAction('select', node, view);
        }
    }
});
