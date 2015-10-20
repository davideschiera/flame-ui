import Ember from 'ember';

export default Ember.Route.extend({
    transactionStore: Ember.inject.service(),

    model() {
        return this.get('transactionStore').findAll();
    }
});