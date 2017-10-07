(function(window) {
  'use strict';
  var App = window.App || {};

  //class
  function DataStore() {
    this.data = {};
  }
  //setter
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };
  //getters
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };

  DataStore.prototype.getAll = function() {
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(process);
