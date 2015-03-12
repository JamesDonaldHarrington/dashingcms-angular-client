app.service('User', function(localStorageService, $rootScope){
  var User = {};
  var thisUser={};
  
  

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
      thisUser = this;
      return localStorageService.set('user', this);
    };
    return this;
  };

  User.load = function(){
    return (thisUser = localStorageService.get('user') || null);
  }; User.load();


  User.get = function(){
    return thisUser;
  };


  User.destroy = function(){
    thisUser = null;
    $rootScope.loggedin = false;
    return localStorageService.remove('user');
  };
  

  return User;
});

app.factory('thisUser', function(User){
  return function (){
    return User.get();
  };
});
