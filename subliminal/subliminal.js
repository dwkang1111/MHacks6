Dreams = new Mongo.Collection("dreams");
var loadedimages = false;
 
if (Meteor.isClient) {
  // This code only runs on the client
  // Template.body.helpers({
  //   dreams: function () {
  //     return Dreams.find({});
  //   }
  // });


  Template.List.helpers({
    dreams: function () {
      return Dreams.find({});
    }
  });
 
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
        $('#left').css('visibility', 'visible');
        $('#right').css('visibility', 'visible');


        node = document.getElementById('addhere');
        if(loadedimages){
          while(node.hasChildNodes()){
            node.removeChild(node.lastChild);
          }
          loadedimages = false;
        }
        Meteor.call('searchQuery', text, function(err,result2){
            if(result2 == null){
              $('#addhere').append('<p> There was an error! </p>');             
            }
            else{
              for(var obj in result2.sources){
                for(var objin in result2.sources[obj].result){
                    $('#addhere').append('<img src="' + result2.sources[obj].result[objin].preview_url + '" class="imgBarimg draggable"/>');             
                }
              }
              console.log(result2);
            }
          });
        loadedimages = true;
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
    searchQuery: function(text){
        var resultImages = HTTP.get("http://freeimages.pictures/api/user/7606117490679026/?sources=pixabay|google&format=json&keyword=" + text);
        return resultImages.data;
    }
  });
      
}












