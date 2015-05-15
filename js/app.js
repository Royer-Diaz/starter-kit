Blogger = Ember.Application.create();


Blogger.IndexRoute = Ember.Route.extend({
  nav: function() {
    return ['post', 'about', 'contact'];
  }


});
