
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('note-item-type', 'helper:note-item-type', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function (assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{note-item-type inputValue}}`);

  assert.equal(this.$().text().trim(), 'Indoor');
});

test('Should show Outdoor for type', function (assert) {
  this.set('inputValue', 'Hiking');

  this.render(hbs`{{note-item-type inputValue}}`);

  assert.equal(this.$().text().trim(), 'Outdoor')
});

