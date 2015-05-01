app.controller('dashboard.Ctrl', function($http, $scope){
  $http.get('/api/cms/users')
  .success(function(d){
    $scope.users = d.results;
  });
});
