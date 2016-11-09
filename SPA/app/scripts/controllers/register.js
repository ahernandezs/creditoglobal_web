'use strict';
angular.module('spaApp').controller('RegisterCtrl', ['$scope' ,'$location', function ($scope,$location){
	$scope.selection=0;
    $scope.head=0;
    $scope.step=0;

	$scope.completeStep = function(nextStep){
    	$scope.error = false;
    	$scope.errorMessage = null;
    	if (nextStep===1){
            $scope.step=1;
            $scope.head=0;
        }
        if (nextStep===2){
            $scope.step=2;
            $scope.head=0;
        }
        if (nextStep===3) {
            $scope.head=1;
        }
        $scope.selection = nextStep;
  	};

  	$scope.gotoHome =function(){
    	$scope.selection = 0;
        $scope.head=0;
        $scope.step=0;
        $location.path( '/home' );
  	};
    $scope.gotoLogin=function(){
        $scope.selection=0;
        $scope.head=0;
        $scope.step=0;
        $location.path('/login');
    };
}]);