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
    title:'Dashboard'
  })

/////////////////////////////////////////////////////////////BLOG///////////////////////////////////////////////////////
  .when('/dashing/blog', {
    templateUrl: '/tpl/dashing/blogs/blog.html',
    controller: 'blogCtrl',
    title:'Blog'
  })

/////////////////////////////////////////////////////////////FILES//////////////////////////////////////////////////////
  .when('/dashing/files', {
    templateUrl: '/tpl/dashing/files/files.html',
    controller: 'filesCtrl',
    title:'Files'
  })

/////////////////////////////////////////////////////////////GALLERIES//////////////////////////////////////////////////
  .when('/dashing/galleries', {
    templateUrl: '/tpl/dashing/galleries/galleries.html',
    controller: 'galleriesCtrl',
    title:'Galleries'
  })
  .when('/dashing/galleries/create', {
    templateUrl: '/tpl/dashing/galleries/create.html',
    controller: 'createGalleriesCtrl',
    title:'Create Gallery',
    context:'create'
  })
  .when('/dashing/galleries/update/:id', {
    templateUrl: '/tpl/dashing/galleries/create.html',
    controller: 'createGalleriesCtrl',
    title:'Update Gallery',
    context:'update'
  })

/////////////////////////////////////////////////////////////FILES//////////////////////////////////////////////////////
  .when('/dashing/users', {
    templateUrl: '/tpl/dashing/users/users.html',
    controller: 'usersCtrl',
    title:'Users'
  });


  $routeProvider.otherwise({redirectTo: '/'});

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true).hashPrefix('!');
});
