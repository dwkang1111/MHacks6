if (Meteor.isClient) {

  Template.register_input.events({
    'submit form': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
              username: username,
            }
        }, 
        function(error){
              if(error){
                 console.log(error.reason);
                  alert(error.reason); // Output error if registration fails
              } else {
                  Router.go("/"); // Redirect user if registration succeeds
              }
      });
        // Router.go('Home');
    }
  });

 Template.logout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/login');
    }
  });

 Template.login_input.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
        if(error){
        alert(error.reason);
        } else {
        console.log("go to home page");
        Router.go("/");
        }
        });
    }
  });



}








