app.config(function($httpProvider) {
  
  $httpProvider.interceptors.push(function($q, ubAlert, User, $location) {
    return {
      'responseError': function(rejection) {
        var data = rejection.data;
        var reject = $q.reject(rejection);
        console.log('Failed with', rejection.status, 'status');
        
        if (data && data.results && data.type) {
          if (data.results.errors) {
            var errArr = [];
            for(var k in data.results.errors)
              {errArr.push(data.results.errors[k].message); }
            ubAlert({message:errArr.join('\n'), type:data.type, timer:4000+(errArr.length *1000) });
            return reject;
          }
          if (data.status === 401 ){
            User.destroy();
            ubAlert({message:data.message, type:data.type});  
            $location.path('/login');
            return reject;
          }
          ubAlert({message:data.message, type:data.type});
        }
        

        return reject;
      }
    };
  });

});
