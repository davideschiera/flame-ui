import Ember from 'ember';

export default Ember.Component.extend({
    tagName:    'label',
    classNames: ['input-toggle'],
    input:      Ember.$(),

    didInsertElement() {
        this.set('input', this.$('input'));
    },

    actions: {
        toggle: function() {
            var $input = this.get('input');

            if ($input.is(':disabled')) { return; }
            this.toggleProperty('checked');
            $input.trigger('change');
            //
            // Need this run next or the action is triggered too early
            //
            Ember.run.next(this, function() {
                this.sendAction('onChange', this.get('checked'));
            });
        }
    }
});
