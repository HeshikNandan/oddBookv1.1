Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound'
  'verbose': true,  // Show loading messages in console
  'timeOut': 5000,  // wait 5s for our humongous library to finish loading
  'preload': {
    'async'  : 'https://www.google.com/jsapi',
    'onAsync' : function () {
      console.log("LOADED")
    },
  }
});

Router.route('/org_chart', {
  name: 'orgChart'
});

Router.route('/createUser', {
  name: 'createUser'
});

Router.route('/deleteUser', {
  name: 'deleteUser'
});

Router.route('/home', {
  name: 'home'
});

Router.route('/', {
  name: 'loginPage'
});

Router.route('/feedback', {
	name: 'feedback'
});
