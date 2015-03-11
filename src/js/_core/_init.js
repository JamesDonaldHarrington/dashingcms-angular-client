var app = angular.module('dashing', ['ngRoute', 'LocalStorageModule', 'mm.foundation'] );

app.run(function($rootScope){
  $rootScope.public = true;
});


app.run(function($http, User){
  var user = User.getUser();
  $http.defaults.headers.common.token = user.token;
  $http.defaults.headers.common.id = user._id;
});
