(function () {
  'use strict';
  angular
    .module('app')
    .factory('freeboxService', freeboxService);

    freeboxService.$inject = ['$http'];

    function freeboxService($http) {
        
      return {
        pressKey : function(key) {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/key/' + key, function (data, jwres){
                    return resolve(data);
                });
            });
        },
        power : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/power', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        home : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/home', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        ok : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/ok', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        mute : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/mute', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        progUp : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/prog/up', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        progDown : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/prog/down', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        volumeUp : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/volume/up', function (data, jwres){
                    return resolve(data);
                });
            });
        },
        volumeDown : function() {
            return new Promise(function(resolve, reject) {
                io.socket.get('/freebox/volume/down', function (data, jwres){
                    return resolve(data);
                });
            });
        }
      };

	}
})();
