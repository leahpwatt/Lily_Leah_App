var app = angular.module("routerApp");
	app.directive("quote", function(){
		return {
			restrict: "E",
			templateUrl: "partials/home-api.html",
			scope: true
		};
	});