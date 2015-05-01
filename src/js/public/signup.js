app.controller('signup.Ctrl', function($scope, $http, $location, ubAlert, User) {
  
  $scope.signup = function(){
    if ($scope.signupForm.$valid) {
      $http.post('/api/signup', $scope.creds)
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
