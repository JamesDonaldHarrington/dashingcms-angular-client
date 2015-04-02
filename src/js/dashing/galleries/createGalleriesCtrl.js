app.controller('createGalleriesCtrl', function($scope, $modal, $http, ubAlert, $route, $routeParams){
  $scope.context = $routeParams.id? 'update':'create';
  var update = $scope.context == 'update'
  $http.get('/api/cms/files').success(function(d){$scope.files = d.results;});
  
  if (update) { $http.get('/api/cms/galleries/'+$routeParams.id).success(function(d){$scope.newGallery = d.results}); }

  $scope.createGallery = function(){
    if ($scope.createForm.$valid) {
      $http.post('/api/cms/galleries', $scope.newGallery)
      .success(function(d){
        console.log(d);
        if (d.success) {
          console.log('success');
        }
      });
    }
  };
});
