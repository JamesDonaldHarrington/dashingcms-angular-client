app.service('User', function(localStorageService){
  var User = {};
  User.create = function(obj){
    obj = obj || {};
    this._id = obj._id;
    this.accessibility = obj.accessibility;
    this.created = obj.created;
    this.email = obj.email;
    this.fullName = obj.firstName + ' ' + obj.lastName;
    this.firstName = obj.givenName || obj.firstName ;
    this.lastName = obj.familyName || obj.lastName;
    this.token = obj.token;
    this.auth = false;
    this.store =function(){
      this.auth = true;
      return localStorageService.set('user', this);
    };

    return this;
  };
  // User.authenticate = function(cb){
  //   var user = localStorageService.get('user');
  //   $http.get('/api/loggedin')
  //   .success(function(d){
  //     return cb(d.success);
  //   });
  // };
  User.getUser = function(){
    return localStorageService.get('user') || {};
  }; 

  return User;
});
