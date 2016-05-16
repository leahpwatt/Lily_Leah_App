var app = angular.module("routerApp");

app.controller("apiOutputController", function($scope, apiService){
	apiService.getRandomQuotes().then(function(response){
		$scope.posts = response.data.data.quote;		
	});


});