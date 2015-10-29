import Ember from 'ember';

export default Ember.Component.extend({
    tagName:    'ul',
    classNames: [ 'sd-tabs-list' ],

    // This is the list of tabs' IDs contained in this tabs-list
    // everytime a new tabs-list is initialized, we set it as empty array
    tabs: null,
    init: function() {
        this._super();
        this.set('tabs', Ember.A([]));
    },

    // By default, set as active tab the first one
    // this prop will then be overrided when a different one is activated
    activeTab:  Ember.computed('tabs.[]', function() {
        return this.get('tabs.0');
    }),

    teardown: Ember.on('willDestroyElement', function() {
        this.set('tabs', Ember.A([]));
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
