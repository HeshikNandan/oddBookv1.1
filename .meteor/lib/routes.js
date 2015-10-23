Router.configure({
  layoutTemplate: 'layout',
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound'
});

Router.route('/org_chart', {
  name: 'orgChart'
});

Router.route('/', function() {
  name: 'home'
});
