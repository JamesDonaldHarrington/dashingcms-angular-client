app.controller('blogCtrl', function($scope, $modal, $http){
  $scope.post = {status:'pending'};

  $http.get('/api/cms/posts')
  .success(function(d){
    if (d.success) {
      $scope.posts = d.results;
    }
  });


  $scope.createPost = function(){

    if ($scope.postForm.$valid) {
      $http.post('/api/cms/posts', $scope.post)
      .success(function(d){
        if (d.success) {
          $scope.posts.push(d.results);
          $scope.post = {status:'pending'};
          $scope.postForm.$submitted = false;
        }
      });
    }

  };

  $scope.openPreview = function(){
    var modalInstance = $modal.open({
      templateUrl: 'modalPreview.html',
      controller: function ($scope, md) {$scope.md = md; },
      resolve: {md: function () {return $scope.post.body; } }
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
