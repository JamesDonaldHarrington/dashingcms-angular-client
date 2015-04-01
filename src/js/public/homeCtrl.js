app.controller('homeCtrl', function($scope, $http, $rootScope, $location, $modal, User) {
  $http.get('/api/start')
  .success(function(d){
    if (d.results.alreadySetup) {
      if(User.get().auth)
        {$scope.link = {text:'Login to Dashing now', url:'/dashing/dashboard'};}
      else
        {$scope.link = {text:'Login to Dashing now', url:'/login'};}
    }else{
      $scope.link = {text:'Start Dashing now', url:'/start'};
    }
  });
});
