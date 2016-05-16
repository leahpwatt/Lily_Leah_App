var app=angular.module("routerApp");

app.controller("apiController", function($scope, apiService, $location){
	$scope.getRandomQuotes = function(){
		apiService.chooseRandomQuote($scope.wiseQuotes);
		$location.path("home/apiOutput")
	}

	// apiService.getRandomQuotes().then(function(data){
	// 	console.log(data.data.quote);
	// 	console.log(data.data.author);
	// });
})
