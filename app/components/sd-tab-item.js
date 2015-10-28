import Ember from 'ember';

export default Ember.Component.extend({
    tagName:          'li',
    classNames:        [ 'sd-tab-item' ],
    classNameBindings: [ 'isActive:-active' ],

    // Register this tab as part of the parent tabs-list, doing so we'll know how many tabs have our list
    // and we can set the first tab as the default activated
    setup: Ember.on('didInsertElement', function() {
       this.send('registerTab');
    }),

    // Use this property to know if the current tab is the active one
    isActive: Ember.computed('activeTab', function() {
        return this.get('activeTab') === this.get('elementId');
    }),

    // Clicking on this tab will activate it
    click() {
        this.send('activateTab');
    },

    actions: {
        registerTab() {
             this.sendAction('registerTab', this.get('elementId'));
        },
        activateTab() {
            this.sendAction('activateTab', this.get('elementId'));
        }
    }
});
