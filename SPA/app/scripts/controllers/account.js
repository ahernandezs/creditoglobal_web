'use strict';
angular.module('spaApp').controller('AccountCtrl', ['$scope' ,'$location', function ($scope,$location){
	$scope.selection=0;

	$scope.gotoHome=function(){
        $location.path('/home');
    };
    $scope.changePass=function(){
    	$location.path('/settings');
    };
}]);