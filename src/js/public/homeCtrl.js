app.controller('homeCtrl', function($scope, $http, $rootScope, $location, $modal) {
  $http.get('/api/start')
  .success(function(d){
    if (d.results.alreadySetup) {
      $scope.link = {text:'Login to Dashing now', url:'/login'};
    }else{
      $scope.link = {text:'Start Dashing now', url:'/start'};
    }
  });
});
