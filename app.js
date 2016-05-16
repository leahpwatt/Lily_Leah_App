var routerApp = angular.module("routerApp", ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        templateUrl: '/partials/home.html'
        
    })
  
    // nested list
    .state('home.input', {
        url: '/input',
        templateUrl: '/partials/home-input.html',
        controller: "inputController"
        
        
    })

     .state('home.output', {
        url: '/output',
        templateUrl: '/partials/home-output.html',
        controller: "outputController"
        
        
    })

    .state('home.api', {
        url: '/api',
        templateUrl: '/partials/home-api.html',
        controller: "apiController"
        
        
    })

    .state('home.apiOutput', {
        url: '/apiOutput',
        templateUrl: '/partials/home-apiOutput.html',
        controller: "apiOutputController"
        
        
    })

});