var app=angular.module("routerApp");

app.controller("apiController", function($scope, apiService, $location){
	$scope.getRandomQuotes = function(){
		apiService.chooseRandomQuote;
		$location.path("home/apiOutput")
	}
})
