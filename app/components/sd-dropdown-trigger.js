import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',

    click() {
        this.send('toggleDropdown');
    },

    actions: {
        toggleDropdown() {
            this.sendAction('toggleDropdown');
        }
    }
});
