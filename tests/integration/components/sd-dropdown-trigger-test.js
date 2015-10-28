import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sd-dropdown-trigger', 'Integration | Component | sd dropdown trigger', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sd-dropdown-trigger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sd-dropdown-trigger}}
      template block text
    {{/sd-dropdown-trigger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
