app.config(function($routeProvider, $locationProvider) {
  $routeProvider

/////////////////////////////////////////////////////////////STARTUP AND LOGIN / SIGNUP ////////////////////////////////
  .when('/', {
    templateUrl: '/tpl/public/home.html',
    controller: 'homeCtrl',
    title:'Home'
  })
  .when('/login', {
    templateUrl: '/tpl/public/login.html',
    controller: 'loginCtrl',
    title:'Login'
  })
  .when('/start', {
    templateUrl: '/tpl/public/start.html',
    controller: 'startCtrl',
    title:'start'
  })


/////////////////////////////////////////////////////////////DASHBOARD//////////////////////////////////////////////////
  .when('/dashing/dashboard', {
    templateUrl: '/tpl/dashing/dashboard.html',
    controller: 'dashboardCtrl',
    title:'Dashing Dashboard'
  })

/////////////////////////////////////////////////////////////BLOG///////////////////////////////////////////////////////
  .when('/dashing/blog', {
    templateUrl: '/tpl/dashing/blog/blog.html',
    controller: 'blogCtrl',
    title:'Dashing blog'
  })

/////////////////////////////////////////////////////////////FILES//////////////////////////////////////////////////////
  .when('/dashing/files', {
    templateUrl: '/tpl/dashing/files/files.html',
    controller: 'filesCtrl',
    title:'Dashing files'
  })

/////////////////////////////////////////////////////////////FILES//////////////////////////////////////////////////////
  .when('/dashing/galleries', {
    templateUrl: '/tpl/dashing/galleries/galleries.html',
    controller: 'galleriesCtrl',
    title:'Dashing galleries'
  });



  $routeProvider.otherwise({redirectTo: '/'});

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true).hashPrefix('!');
});
