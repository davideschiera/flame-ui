import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    return hash.a === hash.b;
  }
});
