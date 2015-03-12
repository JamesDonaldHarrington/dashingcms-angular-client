var app = angular.module('dashing', ['ngRoute', 'LocalStorageModule', 'mm.foundation', 'hc.marked'] );


app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({gfm: true});
}]);

app.run(function($rootScope, thisUser){
  $rootScope.$on("$routeChangeStart", function(){
    var user = thisUser();
    $rootScope.loggedin = user?true:false;
  });
});


app.run(function(thisUser, $http){
  var user = thisUser();
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
