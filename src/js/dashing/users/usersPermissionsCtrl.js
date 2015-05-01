app.controller('users.permissions.Ctrl', function($scope, $modal, $http, ubAlert){
  
  $http.get('/api/cms/rolls')
  .success(function(d){
    console.log(d);
    $scope.rolls = d.results;
  });

  $http.get('/api/cms/access')
  .success(function(d){
    $scope.access = d.results;
  });


  $scope.openModal = function () {
    var modalInstance = $modal.open({
      templateUrl: 'modal.html',
      controller: 'modal.roll.Ctrl',
      windowClass:'small'
    })
    .result.then(function (d) {
      $scope.rolls.push(d.results);
    });

  };

  $scope.updateRoll = function(){
    $http.put('/api/cms/rolls/'+$scope.editRoll._id, $scope.editRoll)
    .success(function(d) {
      if (d.success) {
        console.log(d);
      }
    });
  };

  $scope.destroyRoll = function(){
    $http.delete('/api/cms/rolls/'+$scope.editRoll._id)
    .success(function(d) {
      if (d.success) {
        $scope.rolls.splice($scope.rolls.map(function(e) {return e._id;}).indexOf($scope.editRoll._id), 1);
        $scope.editRoll = undefined;
        console.log(d);
      }
    });
  };

})
.controller('modal.roll.Ctrl', function ($scope, $modalInstance, $http) {

  $scope.ok = function (roll) {
    roll.access = [];
    $http.post('/api/cms/rolls', roll)
    .success(function(d){
      console.log(d);
      $modalInstance.close(d);
    });
    
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});