app.controller('dashboardCtrl', function($http, $scope){
  $http.get('/api/cms/users')
  .success(function(d){
    $scope.users = d.results;
    console.log(d);
  });
});
