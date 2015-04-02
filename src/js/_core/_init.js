var deps = [
  'ngRoute',
  'LocalStorageModule',
  'mm.foundation',
  'hc.marked',
  'truncate',
  'naif.base64'
];
var app = angular.module('dashing', deps);


app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);

app.run(function($rootScope, User, $route){
  $rootScope.$on("$routeChangeStart", function(event, current, previous){
    $rootScope.title = current.$$route.title;
    var user = User.get();
    $rootScope.loggedin = user?true:false;
  });
});


app.run(function(User, $http){
  var user = User.get();
  if (user) {
    $http.defaults.headers.common.token = user.token;
    $http.defaults.headers.common.id = user._id;
  }
});

app.run(function($rootScope){
  window.rs = $rootScope;
  $rootScope.closeAlert = function(index) {
    $rootScope.alerts.splice(index, 1);
  };
});
