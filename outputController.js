var routerApp = angular.module("routerApp");

routerApp.controller("outputController", function($scope, appService){
	$scope.word = appService.getPalindrome();

});