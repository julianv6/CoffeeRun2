eval(require('fs').readFileSync('tests/datastore.js', 'utf8'));
eval(require('fs').readFileSync('tests/truck.js', 'utf8'));

(function(window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  eval(require('fs').readFileSync('tests/test_datastore.js', 'utf8'));
  eval(require('fs').readFileSync('tests/test_truck.js', 'utf8'));
})(process);
