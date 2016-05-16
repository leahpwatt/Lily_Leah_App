var app = angular.module("ourApp");
	app.directive("project", function(){
		return {
			restrict: "E",
			templateUrl: "partials/api.html",
			scope: true
	};
});