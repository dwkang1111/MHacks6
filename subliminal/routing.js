Router.route('/login', function () {
  this.render('LogIn');
});
Router.route('/register', function() {
  this.render('Register');
});
Router.route('/', function () {
  this.render('Home');
});
Router.route('/input', function() {
  this.render('InputDream');
})
Router.route('/list', function() {
  this.render('List');
})
Router.route('/about', function() {
  this.render('About');
})
Router.route('/showDream', function() {
  this.render('showDream');
})