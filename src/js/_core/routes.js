app.config(function($routeProvider, $locationProvider) {
  $routeProvider

/////////////////////////////////////////////////////////////STARTUP AND LOGIN / SIGNUP ////////////////////////////////
  .when('/', {
    templateUrl: '/tpl/public/home.html',
    controller: 'home.Ctrl',
    title:'Home'
  })
  .when('/login', {
    templateUrl: '/tpl/public/login.html',
    controller: 'login.Ctrl',
    title:'Login'
  })
  .when('/start', {
    templateUrl: '/tpl/public/start.html',
    controller: 'start.Ctrl',
    title:'start'
  })


/////////////////////////////////////////////////////////////DASHBOARD//////////////////////////////////////////////////
  .when('/dashing/dashboard', {
    templateUrl: '/tpl/dashing/dashboard.html',
    controller: 'dashboard.Ctrl',
    title:'Dashboard'
  })

/////////////////////////////////////////////////////////////BLOG///////////////////////////////////////////////////////
  .when('/dashing/blog', {
    templateUrl: '/tpl/dashing/blogs/blog.html',
    controller: 'blog.Ctrl',
    title:'Blog'
  })

/////////////////////////////////////////////////////////////FILES//////////////////////////////////////////////////////
  .when('/dashing/files', {
    templateUrl: '/tpl/dashing/files/files.html',
    controller: 'files.Ctrl',
    title:'Files'
  })

/////////////////////////////////////////////////////////////GALLERIES//////////////////////////////////////////////////
  .when('/dashing/galleries', {
    templateUrl: '/tpl/dashing/galleries/galleries.html',
    controller: 'galleries.Ctrl',
    title:'Galleries'
  })
  .when('/dashing/galleries/create', {
    templateUrl: '/tpl/dashing/galleries/create.html',
    controller: 'create.Galleries.Ctrl',
    title:'Create Gallery',
    context:'create'
  })
  .when('/dashing/galleries/update/:id', {
    templateUrl: '/tpl/dashing/galleries/create.html',
    controller: 'create.Galleries.Ctrl',
    title:'Update Gallery',
    context:'update'
  })

/////////////////////////////////////////////////////////////USERS//////////////////////////////////////////////////////
  .when('/dashing/users', {
    templateUrl: '/tpl/dashing/users/users.html',
    controller: 'users.Ctrl',
    title:'Users'
  })
  .when('/dashing/permissions', {
    templateUrl: '/tpl/dashing/users/permissions.html',
    controller: 'users.permissions.Ctrl',
    title:'Permissions'
  });


  $routeProvider.otherwise({redirectTo: '/'});

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true).hashPrefix('!');
});
