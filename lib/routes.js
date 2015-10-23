Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound'
});

Router.route('/org_chart', {
  name: 'orgChart'
});

Router.route('/createUser', {
  name: 'createUser'
});

Router.route('/home', {
  name: 'home'
});

Router.route('/', {
  name: 'loginPage'
});
