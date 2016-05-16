var routerApp = angular.module("routerApp");

routerApp.controller("inputController", function($scope, appService, $location){
	$scope.getPalindrome = function(){
		appService.palindromeReveal($scope.checkPalindrome);
		$location.path("/output");
	};
});

