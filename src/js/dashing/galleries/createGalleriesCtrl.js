app.controller('createGalleriesCtrl', function($scope, $modal, $http, ubAlert, $route, $routeParams, $location){
  $scope.context = $routeParams.id? 'update':'create';
  var update = $scope.update = $scope.context == 'update';
  $scope.newGallery = {
    images:[]
  };
  var allowedExtentions = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'bpg', 'svg'];
  $http.get('/api/cms/files').success(function(d){
    var allowedFiles = [];
    for (var i = d.results.length - 1; i >= 0; i--) {
      if (allowedExtentions.indexOf(d.results[i].extension.toLowerCase()) > -1) 
        { allowedFiles.unshift(d.results[i]); }
    }
    $scope.files = allowedFiles;
  });
  
  if (update) { $http.get('/api/cms/galleries/'+$routeParams.id).success(function(d){$scope.newGallery = d.results;}); }


  $scope.createGallery = function(){
    angular.forEach($scope.newGallery.images, function(v, i){
      if (!v || !v._id) { $scope.newGallery.images.splice(i); }
    });
    if ($scope.createForm.$valid) {
      var promise;
      if (update) {
        promise = $http.put('/api/cms/galleries', $scope.newGallery);
      }else{
        promise = $http.post('/api/cms/galleries', $scope.newGallery);
      }
      promise.success(function(d){
        if (d.success) {
          if (update) { ubAlert({message:'Updated Successfuly', type:'win'});}
          else {ubAlert({message:'Created Successfuly', type:'win'}); }
        }
      });
    }
  };

  $scope.clickFile = function(_id){
    if (!$scope.newGallery.images.some(function(e) {return e._id == _id;})) {
      $scope.newGallery.images.push({_id:_id});
    }else{
      var ind = $scope.newGallery.images.map(function(obj, index) {
          if(obj._id == _id) { return index; }
      }).filter(isFinite);
      $scope.newGallery.images.splice(ind,1);
    }
  };

  $scope.isSelected = function(_id){
    return $scope.newGallery.images.some(function(e) {return e._id == _id;});
  };

  $scope.deleteGallery = function(){
    $http.delete('/api/cms/galleries/'+$routeParams.id)
    .success(function(d){ $location.path('/dashing/galleries'); });
  };

});
