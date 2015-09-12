Dreams = new Mongo.Collection("dreams");
 
if (Meteor.isClient) {
  // This code only runs on the client
  // Template.body.helpers({
  //   dreams: function () {
  //     return Dreams.find({});
  //   }
  // });
 
  Template.inputDream.events({
    "submit .tag-list": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Get value from form element
      var text = event.target.tags.value;
      if(text != "") {
        // Insert a task into the collection
        // Dreams.insert({
        //   tags: text,
        //   createdAt: new Date() // current time
        // });
   
        // Clear form
        event.target.tags.value = "";

        $('#imageBar').height('0px');
        $('#imageBar').animate({height: '+=200px'});
        $('.imgBarimg').height('180px');
        //$('.imgBarimg').animate({height: '+=180px'});
      }
    }
  });

  Template.username.helpers({
  username: function() {
    return Meteor.user().profile.username;
  }
  });




}








