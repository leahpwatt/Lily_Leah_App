var routerApp = angular.module("routerApp");
	routerApp.directive("project", function(){
		return {
			restrict: "E",
			templateUrl: "partials/api.html",
			scope: true
	};
});