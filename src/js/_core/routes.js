app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/tpl/public/home.html',
    controller: 'homeCtrl',
    title:'Home'
  }).when('/login', {
    templateUrl: '/tpl/public/login.html',
    controller: 'loginCtrl',
    title:'Login'
  }).when('/start', {
    templateUrl: '/tpl/public/start.html',
    controller: 'startCtrl',
    title:'start'
  }).when('/dashing/dashboard', {
    templateUrl: '/tpl/dashing/dashboard.html',
    controller: 'dashboardCtrl',
    title:'Dashing Dashboard'
  });

  $routeProvider.otherwise({redirectTo: '/'});

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true).hashPrefix('!');
});
