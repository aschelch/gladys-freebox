(function () {
  'use strict';

  angular
    .module('app')
    .controller('freeboxCtrl', freeboxCtrl);

  freeboxCtrl.$inject = ['freeboxService', '$scope'];

  function freeboxCtrl(freeboxService, $scope){
		/* jshint validthis: true */
		var vm = this;

		/* Functions */
		vm.pressKey = function(key) {
			freeboxService.pressKey(key);
		};

		vm.power = function() {
			freeboxService.power();
		};
		
		vm.ok = function() {
			freeboxService.ok();
		};

		vm.home = function() {
			freeboxService.home();
		};

		vm.mute = function() {
			freeboxService.mute();
		};

		vm.progUp = function() {
			freeboxService.progUp();
		};

		vm.progDown = function() {
			freeboxService.progDown();
		};

		vm.volumeUp = function() {
			freeboxService.volumeUp();
		};

		vm.volumeDown = function() {
			freeboxService.volumeDown();
		};
		
  }
})();
