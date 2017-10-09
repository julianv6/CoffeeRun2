(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  //constructor
  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function() {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    var serverUrl = this.serverUrl;
    $.get(serverUrl, function(serverResponse) {
      serverResponse.forEach(function(item) {
        if (item['emailAddress'] === key) {
          $.ajax(serverUrl + item['id'], {
            type: 'DELETE'
          }); //delete
        } //if
      }); //for Each
    }); //get
  }; //prototype

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
