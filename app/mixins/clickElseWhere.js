import Ember from 'ember';

//
// ClickElsewhere
//
// This Mixin is useful when you need to detect when someone click outside the given view or component
// To use it, define the function you want to call and assign it to `onClickElsewhere` inside your view/component
//

export default Ember.Mixin.create({
    // By default, automatically initialize the event
    autoInitClickElsewhere: true,

    // Your custom function
    onClickElsewhere: Ember.K,

    onClickElsewhereBound: null,

    // Set an event that will be fired when user clicks outside of the component/view
    setupClickElsewhereListener: function() {
        this.set('onClickElsewhereBound', this.get('onClickElsewhere').bind(this));
        Ember.$(document).on('mouseup', this.get('onClickElsewhereBound'));
        //Ember.$(document).on('mouseup', function() { console.log('a'); });
    },

    // Clean the previously defined event to keep events stack clean
    removeClickElsewhereListener: function() {
        Ember.$(document).off('moseup', this.get('onClickElsewhereBound'));

        // We can set the prop to null only if the object still exists
        if (this.isDetroyed || this.isDestroying) return;
        this.set('onClickElsewhereBound', null);
    },

    // Setup listener on didInsertElement
    setupClickElsewhereListenerOnLoad: Ember.on('didInsertElement', function() {
        this.notifyPropertyChange('isClickElsewhereEnabled');
        if (this.get('autoInitClickElsewhere') === false) return;
        this.setupClickElsewhereListener();
    }),

    // Remove listener on willDestroyElement
    removeClickElsewhereListenerOnDestroy: Ember.on('willDestroyElement', function() {
        if (this.get('autoInitClickElsewhere') === false) return;
        this.removeClickElsewhereListener();
    })
});
