/* global d3 */

import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

//
// Patch d3.entries to include only own property and avoid extra properties added by Ember prototypes.
//
d3.entries = function(map) {
  var entries = [];
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      entries.push({key: key, value: map[key]});
    }
  }
  return entries;
};

export default App;

