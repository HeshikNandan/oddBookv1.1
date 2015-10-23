

if (Meteor.isClient) {

  Template.showUser.events({
      "click button" : function(){
          Router.go("/test");
      }
  });

  //Set value to the select option
  Template.createUser.helpers({
    user: function(){
      return Team.find();
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
        var boss = $("#techid option:selected").attr("value");
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
