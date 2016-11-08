'use strict';
angular.module('spaApp').controller('MainCtrl', ['$scope','$location', function ($scope,$location) {
	$scope.slection=0;
	$scope.gotoRegister=function(){
  		$scope.selection=0;
  		$location.path('/register');
  	};
  	$scope.gotoLogin=function(){
  		$location.path('/login');
  	};
}]);
