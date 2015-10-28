import Ember from 'ember';

export default Ember.Component.extend({
    tagName:    'ul',
    classNames: [ 'sd-tabs-list' ],

    // This is the list of tabs' IDs contained in this tabs-list
    tabs: Ember.A([]),

    // By default, set as active tab the first one
    // this prop will then be overrided when a different one is activated
    activeTab:  Ember.computed('tabs.[]', function() {
        return this.get('tabs.0');
    }),

    actions: {
        registerTab(tab) {
            this.get('tabs').pushObject(tab);
        },
        activateTab(tab) {
            this.set('activeTab', tab);
        }
    }
});
