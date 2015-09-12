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
      // Insert a task into the collection
      // Dreams.insert({
      //   tags: text,
      //   createdAt: new Date() // current time
      // });
 
      // Clear form
      event.target.tags.value = "";

      $('#imageBar').animate({height: '+=200px'});
    }
  });
}