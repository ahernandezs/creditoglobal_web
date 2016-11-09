'use strict';
angular.module('spaApp').controller('ChangeCtrl', ['$scope' ,'$location', function ($scope,$location){
	$scope.selection=0;

	$scope.nextStep=function(nextStep){
        $scope.selection = nextStep;        
    };
    $scope.savePass=function(){
    	$location.path('/account');
    };
    $scope.gotoHome=function(){
    	$location.path('/home');
    };
}]);