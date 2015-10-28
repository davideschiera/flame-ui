import Ember from 'ember';
import ClickElseWhereMixin from '../mixins/clickElseWhere';

export default Ember.Component.extend(ClickElseWhereMixin, {
    classNames:             [ 'sd-dropdown-wrapper' ],
    classNameBindings:      [ 'isDropdownOpen:-open' ],

    items:          Ember.A(),
    isDropdownOpen: false,
    selectedOption: null,

    label: 'Dropdown',

    action: 'select',

    onClickElsewhere: function(evt) {
        var el = Ember.$(evt.target);

        // Exit if the target element is not in the DOM anymore
        // it means that the clicked element was the "Edit" button of the smartTextbox
        if (Ember.$(document).find(el).length === 0) return;

        // Check if the clicked element is inside the current smartTextbox, if not, close the edit mode
        if (this.$() && this.$().has(el).length === 0) {
            this.send('setDropdownStatus', false);
        }
    },

    actions: {
        // inverts the current status
        toggleDropdown() {
            this.toggleProperty('isDropdownOpen');
        },
        // false = close, true = open
        setDropdownStatus(status) {
            this.set('isDropdownOpen', status);
        },
        // triggered when an option is selected
        selectOption(value) {
            // send a custom action to the parent, passing the value of the selected option as parameter
            this.sendAction(this.get('action'), value);
            // highlight current option
            this.set('selectedOption', value);
            // close the dropdown
            this.send('setDropdownStatus', false);
        }
    }
});
