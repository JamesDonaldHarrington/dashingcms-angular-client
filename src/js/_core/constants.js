app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('dashing');
});
app.constant('access', ['owner', 'admin', 'manager', 'editor', 'author', 'contributors', 'moderator', 'member', 'subscriber', 'user' ]);
