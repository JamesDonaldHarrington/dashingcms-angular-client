app.controller('users.Ctrl', function($scope, $modal, $http, ubAlert){

  $http.get('/api/cms/users')
  .success(function(d){
    if (d.success) {
      $scope.users = d.results;
    }
  });
  $http.get('/api/cms/rolls')
  .success(function(d){
    console.log(d);
    $scope.rolls = d.results;
  });


  $scope.createNewUser = function(){
    console.log($scope);
    if ($scope.newUserForm.$valid) {
      console.log('valid');
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
