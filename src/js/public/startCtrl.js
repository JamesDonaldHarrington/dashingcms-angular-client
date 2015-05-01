app.controller('start.Ctrl', function($scope, $http, $timeout, $location, ubAlert, User) {
  
  $scope.start = function(){
    if ($scope.startForm.$valid) {
      $http.post('/api/start/setup', $scope.info)
      .success(function(d){
        if (d.success) {
          $scope.loading = true;
          var message = d.message;
          $timeout(
            function(){
              $http.post('/api/signup', $scope.creds)
              .success(function(d){
                if (d.success) {
                  var user = new User.create(d.results);
                  if(user.store()){
                    $http.defaults.headers.common.token = user.token;
                    $http.defaults.headers.common.id = user._id;
                    ubAlert({message:message, type:'win', prsist:1});
                    $scope.loading = false;
                    $location.path('/dashing/dashboard');
                  }
                }
              });
            }, 
          3000);
        }
      });
    }
  };

});
