var app = angular.module("routerApp");

app.controller("apiOutputController", function($scope, apiService){
	apiService.getRandomQuotes().then(function(data){
		$scope.quotes = data.data.quote;		
		$scope.author = data.data.author;		
	console.log(data.data.quote);
		console.log(data.data.author);
	});


});


