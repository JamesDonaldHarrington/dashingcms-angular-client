app.controller('galleriesCtrl', function($scope, $modal, $http, ubAlert){
  

  $http.get('/api/cms/galleries')
  .success(function(d){
    if (d.success) {
      $scope.galleries = d.results;
    }
  });

});
