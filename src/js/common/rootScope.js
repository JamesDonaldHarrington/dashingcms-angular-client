app.run(function($rootScope){
  window.rs = $rootScope;
  $rootScope.closeAlert = function(index) {
    $rootScope.alerts.splice(index, 1);
  };
});
