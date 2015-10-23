
  //Set value to the select option
Template.createUser.helpers({
  team: function(){
    return Team.find();
  }
});
Template.createUser.events({
    "click .submit-user": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      // Create all values
      var email = $("#email").val();
      var occupation = $("#occupation").val();
      var birthday = $("#birthday").val();
      var joinedIn = $("#joinedin").val();
      var name = $("#name").val();
      var location = $("#location").val();
      var hobbies = $("#hobbies").val();
      var team = $("#teamid option:selected").attr("value");
      console.log("Creating User : " + email);
      // Insert a task into the collection
      User.insert({
        email: email,
        occupation: occupation,
        birthday: birthday,
        name: name,
        joinedIn:joinedIn,
        location: location,
        hobbies: hobbies,
        team: team,
        createdAt: new Date() // current time
      });
      
      //Router.go("org_chart");
      // Clear form
      event.target.text.value = "";
    }
  });
