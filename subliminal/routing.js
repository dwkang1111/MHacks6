Router.route('/login', function () {
  this.render('LogIn');
});
Router.route('/', function () {
  this.render('Home');
});
Router.route('/input', function() {
  this.render('InputDream');
})