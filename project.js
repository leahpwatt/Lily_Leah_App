var app = angular.module("routerApp");
	app.directive("quote", function(){
		return {
			restrict: "E",
			templateUrl: "partials/quote.html",
			scope: true
		};
	});