'use strict';
angular.module('spaApp').controller('RegisterCtrl', ['$scope' ,'$location', function ($scope,$location){
	$scope.selection=0;

	$scope.completeStep = function(nextStep){
    	$scope.error = false;
    	$scope.errorMessage = null;
    	$scope.selection = nextStep;
    	//var progressHeight = document.getElementById("progressBar").offsetHeight;
    	//var stepHeight = (((progressHeight / 5)*(nextStep-1)) - progressHeight);
    	//$scope.currentProgress = {top: stepHeight};
  	};

  	$scope.gotoLogin =function(){
    	$scope.selection = 0;
    	$scope.registerData = {};
    	$scope.error = false;
    	$scope.errorMessage = null;
    	//userProvider.resetRegistrationToken();
    	$location.path( '/home' );
  	};
}]);