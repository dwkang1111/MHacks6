Dreams = new Mongo.Collection("dreams");
var loadedimages = false;
 
if (Meteor.isClient) {

  Session.setDefault('tags_list_temp', []);

  Template.List.helpers({
    tags_list_temp: function () {
      return Session.get('tags_list_temp');
    }
  });

  Template.inputDream.helpers({
    tags_list_temp: function () {
      return Session.get('tags_list_temp');
    }
  });


  Template.inputDream.rendered=function() {
    $('#my-datepicker').datepicker();
  }
  palette= ['FFBD80','FFAB5D','F39239','D06E13','F34739','FF695D','FF8980','FFBD80','F39239','FFAB5D','F3B839','FFD780','FFCC5D','D09413']

  Template.List.helpers({
    dreams: function () {
      return Dreams.find({});
    }});

  Template.inputDream.events({
    "click .add-dream": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("add-dream firing");
 
      // Get value from form element
      var title = $( "#title_input" ).val();
      // var tags = [{'name':'tag1'},{'name':'tag2'}]
      console.log(title);

      var date_given = $( "#my-datepicker" ).val();  //from date_picker
      console.log(date_given);
       
      // Insert a task into the collection
      Dreams.insert({
        title: title,
        date: date_given,     
        tags: Session.get('tags_list_temp')
      });

      Session.set('tags_list_temp', []);
 
      // Clear form
      // event.target.title.value = "";

    }
  });

  Template.Home.rendered = function() {
      (function makeDiv(){
        console.log(palette.length);
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower1').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();
    
    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower2').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower3').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower4').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower5').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower6').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower7').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower8').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();
    
    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower9').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower10').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower11').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glowe12').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower13').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

    (function makeDiv(){
        var divsize = ((Math.random()*80) + 100).toFixed();
        $newdiv = $('.glower14').css({
            'width':divsize+'px',
            'height':divsize+'px',
            'background-color':'#'+palette[Math.floor(Math.random() * 14) + 0],
            'position':'absolute',
            'border-radius':(divsize/2)+'px',
            'opacity':(Math.random()/6 + 0.0)
        });

        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        }).appendTo( 'body' ).fadeIn(1200).delay(1600).fadeOut(1000, function(){
             makeDiv(); 
        }); 
    })();

      
  }
 
  Template.inputDream.events({
    "submit .tag-list": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      console.log("sumbit tag-list firing");
      // Get value from form element
      var text = event.target.tags.value;
      console.log("text:",text);
      var object = {'name': text};
      var old_tags_list_temp = Session.get('tags_list_temp');
      var new_tags_list_temp = old_tags_list_temp;
      new_tags_list_temp.push(object);
      console.log(object);
      console.log("old_tags_list_temp",old_tags_list_temp);
      console.log("new_tags_list_temp",new_tags_list_temp);
      Session.set('tags_list_temp', old_tags_list_temp);
      if(text != "") {
   
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
                    $('#addhere').append('<img src="' + result2.sources[obj].result[objin].preview_url + '" class="imgBarimg draggable drag-drop"/>');             
                }
              }
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











