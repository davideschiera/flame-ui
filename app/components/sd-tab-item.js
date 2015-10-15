import Ember from 'ember';

export default Ember.Component.extend({
    tagName:          'li',
    classNames:        [ 'sd-tab-item' ],
    classNameBindings: [ 'isActive:-active' ],

    isActive: false
});
