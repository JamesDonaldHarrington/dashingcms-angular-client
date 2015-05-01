app.controller('login.Ctrl', function($scope, $http, $rootScope, $location, $modal, ubAlert, User) {
  
  $scope.login = function(){
    if ($scope.loginForm.$valid) {
      $http.post('/api/login', $scope.creds)
      .success(function(d){
        if (d.success) {
          var user = new User.create(d.results);
          if(user.store()){
            $http.defaults.headers.common.token = user.token;
            $http.defaults.headers.common.id = user._id;
            ubAlert({message:d.message, type:d.type});
            $location.path('/dashing/dashboard');
          }
        }
      });
    }
  };

});
