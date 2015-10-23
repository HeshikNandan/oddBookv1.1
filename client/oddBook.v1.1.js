User = new Mongo.Collection("user");
RaiseEvent = new Mongo.Collection("raise_event");
EventAttenders = new Mongo.Collection("event_Attenders");
Activity = new Mongo.Collection("activity");
Comments = new Mongo.Collection("comments");
Chat = new Mongo.Collection("chat");

if (Meteor.isClient) {

  Template.showUser.helpers({
      user: {
        name:
      }

  });

  //Set value to the select option
  Template.createUser.helpers({
    user: function(){
      return User.find();
    }
  });
  Template.body.events({
      "click .submit-user": function (event) {
        // Prevent default browser form submit
        console.log("isExecuted");
        event.preventDefault();
        // Create all values
        var email = $("#email").val();
        var occupation = $("#occupation").val();
        var birthday = $("#birthday").val();
        var name = $("#name").val();
        var location = $("#location").val();
        var relationshipstatus = $("#relationshipstatus").val();
        var status = $("#status").val();
        var hobbies = $("#hobbies").val();
        var boss = $("#bossid option:selected").attr("value");
        // Insert a task into the collection
        User.insert({
          email: email,
          occupation: occupation,
          birthday: birthday,
          name: name,
          location: location,
          relationshipstatus: relationshipstatus,
          status: status,
          hobbies: hobbies,
          boss: boss,
          createdAt: new Date() // current time
        });
    //
        // Clear form
        //event.target.text.value = "";
      }
    });
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
