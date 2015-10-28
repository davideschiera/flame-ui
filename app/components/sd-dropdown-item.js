import Ember from 'ember';

export default Ember.Component.extend({
    tagName:           'li',
    classNameBindings: [ 'item.hidden:-hidden' ],

    selectedOption: null,
    isSelected: Ember.computed('selectedOption', function() {
        return this.get('selectedOption') === this.get('item.value');
    }),

    actions: {
        selectOption(value) {
            this.sendAction('selectOption', value);
        },
        setDropdownStatus(status) {
            this.sendAction('setDropdownStatus', status);
        }
    }
});
