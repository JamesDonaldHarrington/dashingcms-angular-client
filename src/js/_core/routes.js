app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/tpl/public/home.html',
    controller: 'homeCtrl',
    title:'Home'
  });

  $routeProvider.otherwise({redirectTo: '/'});

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true).hashPrefix('!');
});
