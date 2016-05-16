var app=angular.module("ourApp");

app.controller("apiController", function($scope, apiService, $location){
	$scope.getRandomQuotes = function(){
		apiService.chooseRandomQuote($scope.wiseQuotes);
		$location.path("partials/api.html")
	}

});


