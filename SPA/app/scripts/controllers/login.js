'use strict';
angular.module('spaApp').controller('LoginCtrl', ['$scope' ,'$location', function ($scope,$location){
	$scope.selection=0;

	$scope.completeStep = function(nextStep){
    	$scope.error = false;
    	$scope.errorMessage = null;
    	$scope.selection = nextStep;
    	//var progressHeight = document.getElementById("progressBar").offsetHeight;
    	//var stepHeight = (((progressHeight / 5)*(nextStep-1)) - progressHeight);
    	//$scope.currentProgress = {top: stepHeight};
  	};

  	$scope.gotoHome =function(){
    	$scope.selection = 0;
    	$location.path( '/home' );
  	};
    $scope.gotoRegister=function(){
        $scope.selection=0;
        $location.path('/register');
    };
    $scope.gotoAccount=function(){
        $location.path('/account');
    };
}]);