app.controller('blogCtrl', function($scope, $modal, $http, ubAlert){
  

  $http.get('/api/cms/posts')
  .success(function(d){
    if (d.success) {
      $scope.posts = d.results;
      $scope.posts.unshift({status:'hidden'});
      $scope.selectedPost = $scope.posts[0];
    }
  });


  $scope.createPost = function(){
    if ($scope.postForm.$valid) {
      console.log($scope.selectedPost);
      if ($scope.selectedPost._id) {
        $http.put('/api/cms/posts', $scope.selectedPost)
        .success(function(d){
          if (d.success) {
            $scope.postForm.$submitted = false;
            ubAlert({message:'Post updated successfully', type:'win'});
          }
        });
      }else{
        $http.post('/api/cms/posts', $scope.posts[0])
        .success(function(d){
          if (d.success) {
            $scope.posts.shift();
            $scope.posts.unshift(d.results);
            $scope.posts.unshift({status:'pending'});
            $scope.postForm.$submitted = false;
            $scope.selectedPost = $scope.posts[0];
            ubAlert({message:'Post added successfully', type:'win'});
          }
        });
      }
    }
  };

  $scope.selectPost = function(_id){
    if (!_id) 
      { $scope.selectedPost = $scope.posts[0]; }
    else
      { $scope.selectedPost = $scope.posts[$scope.posts.map(function(e) {return e._id;}).indexOf(_id)]; }
  };

  $scope.deleteBlog = function(_id){
    if(_id){
      $http.delete('/api/cms/posts/'+_id )
      .success(function(d){
        if (d.success) {
          var ind = $scope.posts.map(function(e) { return e._id;}).indexOf(_id);
          $scope.posts.splice(ind, 1);
        }
      });
    }
  };

  $scope.openPreview = function(){
    $modal.open({
      templateUrl: 'modalPreview.html',
      controller: function ($scope, md) {$scope.md = md; },
      resolve: {md: function () {return $scope.selectedPost.body; } }
    });
  };

});







// $scope.func = function(type){
//   var sel, range;
//   if (!!window.getSelection) {
//     sel = window.getSelection();
//     var activeElement = document.activeElement;
//     if (activeElement.nodeName == 'TEXTAREA') {
//       var val = activeElement.value, start = activeElement.selectionStart, end = activeElement.selectionEnd;
//       if (start !== end) {
//         var newVal = {
//           bold:'**'+val+'**',
//           italic:'*'+val+'*',
//           bullet:(function(){ return '* '+val.replace(/\n/g, '\n* '); })()
//         };
//         activeElement.value = val.slice(0, start) + newVal[type] + val.slice(end);
//       }
//     }
//   }
// };
