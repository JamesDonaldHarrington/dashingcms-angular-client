app.controller('menuCtrl', function($scope, User, $location){
  $scope.logout = function(){
    if (User.destroy()) {
      $location.path('/');
    }
  };
});
