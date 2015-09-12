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

        Meteor.call('searchQuery', function(err,result){
          console.log(result);
        });
      }
    }
  });

  Template.username.helpers({
  username: function() {
    return Meteor.user().profile.username;
  }
  });




}

if(Meteor.isServer) {
  Meteor.methods({
    searchQuery:function(text){
        var resultImages = HTTP.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyDU76UofVyeR-zBGXfykO0SoPoUIK1WTps&cx=007694596282040818638:x00ccrp7imi&q=" + text);
        console.log(resultImages.statusCode);
        return resultImages;
  }})
}








