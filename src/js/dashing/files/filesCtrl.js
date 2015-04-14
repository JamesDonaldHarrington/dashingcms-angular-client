app.controller('filesCtrl', function($scope, $modal, $http, ubAlert){
  

  $http.get('/api/cms/files')
  .success(function(d){
    if (d.success) {
      $scope.files = d.results;
    }
  });

  $scope.uploadFile = function(){
    if ($scope.fileForm.$valid) {
      $http.post('/api/cms/files', $scope.newFile)
      .success(function(d){
        if (d.success) {
          $scope.files.unshift(d.results);
        }
      });
    }
  };

  $scope.deleteFile = function(fileId){
    $http.delete('/api/cms/files/'+fileId)
    .success(function(d){
      if (d.success) {
        $scope.files.splice($scope.files.map(function(e) {return e._id;}).indexOf(fileId), 1);
      }
    });
  };

  $scope.selectFile = function(_id){
    if (!_id) 
      { $scope.selectedFile = $scope.files[0]; }
    else
      { $scope.selectedFile = $scope.files[$scope.files.map(function(e) {return e._id;}).indexOf(_id)]; }
  };

});

