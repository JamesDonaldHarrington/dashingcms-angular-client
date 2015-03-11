app.controller('loginCtrl', function($scope, $http, $rootScope, $location, $modal, ubAlert, User) {
  
  $scope.login = function(){
    if ($scope.loginForm.$valid) {
      $http.post('/api/login', $scope.creds)
      .success(function(d){
        if (d.success) {
          var user = new User.create(d.results);
          if(user.store()){
            ubAlert({message:d.message, type:d.type});
            $location.path('/dashing/dashboard');
          }
        }
      });
    }
  };

});
