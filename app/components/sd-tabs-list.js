import Ember from 'ember';

export default Ember.Component.extend({
    tagName:    'ul',
    classNames: [ 'sd-tabs-list' ],

    activeTab:  null
});
