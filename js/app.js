var app = angular.module("googleApp", ['uiGmapgoogle-maps', 'ngRoute'])

app.config(function($routeProvider, uiGmapGoogleMapApiProvider) {

  uiGmapGoogleMapApiProvider.configure({
    key: "AIzaSyDQozrug54dF7eQEjfMaCeIkgjQXo6fLMw",
    v: '3.17',
    libraries: 'weather,geometry,visualization,places'
  })
/*  $routeProvider
    .when("/", {
      templateUrl: "index.html",
      controller: "mainControl"
    })
    .otherwise({
      redirectTo: '/'
    })
*/
})

