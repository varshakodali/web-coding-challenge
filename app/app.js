angular.module("githubApp", ['ngRoute']).
config( [ "$routeProvider", function ( $routeProvider ) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/view1.html',
        controller: 'githubCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);


