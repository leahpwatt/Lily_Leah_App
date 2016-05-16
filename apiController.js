var app=angular.module("routerApp");

app.controller("apiController", function($scope, apiService, $location){
	$scope.getRandomQuotes = function(){
		apiService.getRandomQuotes().then(function(data){
		$location.path("home/apiOutput")
		});
	}

		// console.log(data.data.quote);
		// console.log(data.data.author);
});

