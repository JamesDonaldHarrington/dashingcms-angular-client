app.controller('usersCtrl', function($scope, $modal, $http, ubAlert){

  $http.get('/api/cms/users')
  .success(function(d){
    if (d.success) {
      $scope.users = d.results;
    }
  });


  $scope.createNewUser = function(){
    if ($scope.newUserForm.$valid) {
      $http.post('/api/cms/users', $scope.newUser)
      .success(function(d){
        $scope.users.unshift(d.results);
      });
    }
  };

  $scope.selectUser = function(_id){
    if ($scope.selectedUser && $scope.selectedUser._id === _id) {
      $scope.selectedUser = undefined;
    }else{
      if (!_id) 
        { $scope.selectedUser = $scope.users[0]; }
      else
        { $scope.selectedUser = $scope.users[$scope.users.map(function(e) {return e._id;}).indexOf(_id)]; }
    }
  };

});
