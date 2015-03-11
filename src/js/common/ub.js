app.factory('ubAlert', function(ubUuid, $rootScope, $sce, $timeout){
  /*======
  @Paramiters
    obj
      message:String,
      type:String,
      persist:Number,
      permanent: Boolean,
      //closeable: Boolean,
      timer: Number
  */
  return function(obj){
    if (!$rootScope.alerts && !angular.isArray($rootScope.alerts)) {
      $rootScope.alerts = [];
    }
    if (angular.isObject(obj)) {
      obj.message = $sce.trustAsHtml(obj.message);
      // obj.message = obj.message || 'Oops something went wrong';
      obj._id = ubUuid();
      // obj.closeable = (obj.closeable === false ? false : true);
      var dangers = ['danger', 'error', 'fail', 'bad'];
      var warnings = ['warning', 'warn', 'oops'];
      var successes = ['win', 'success', 'good'];
      var infos = ['info', 'data', 'tip', 'message'];

      if      (dangers.indexOf(obj.type) > -1) {obj.type = 'danger';}
      else if (warnings.indexOf(obj.type) > -1) {obj.type ='warning';}
      else if (successes.indexOf(obj.type) > -1) {obj.type ='success';}
      else if (infos.indexOf(obj.type) > -1) {obj.type ='info';}
      else{ console.log(obj.type + ' is not a valid alert type'); obj.type ='info';}
      $rootScope.alerts.push(obj);
      console.log(obj.permanent !== true);
      if (!obj.persist && obj.permanent !== true) {
        $timeout(function(){
          var ind = $rootScope.alerts.map(function(e) { return e.id; }).indexOf(obj.id);
          $rootScope.alerts.splice(ind, 1);
        },obj.timer || 5000);
      }
    }

  };
});

app.factory('ubAlertReset', function($rootScope, $timeout){
  return function(){
    $rootScope.alerts = $rootScope.alerts || [];
    var temp = $rootScope.alerts;
    $rootScope.alerts = [];
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].persist) {
        if (angular.isNumber(temp[i].persist)) {
          temp[i].persist--;
          if (temp[i].persist > -1) {
            $rootScope.alerts.push(temp[i]);
          }
        }else{
          $rootScope.alerts.push(temp[i]);
        }
      }
      if (temp[i].permanent) {
        $rootScope.alerts.push(temp[i]);
      }
    }
    temp=[];
  };
});



app.factory('ubUuid', function(){
  return function(){
    return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
  };
});
