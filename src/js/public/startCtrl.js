app.controller('startCtrl', function($scope, $http, $rootScope, $location, $modal, ubAlert) {
  
  $scope.start = function(){
    if ($scope.startForm.$valid) {
      $http.post('/api/start/setup', $scope.info)
      .success(function(d){
        console.log(d);
        if (d.success) {
          ubAlert({message:d.message, type:'win'});
        }
      });
    }
  };
});
