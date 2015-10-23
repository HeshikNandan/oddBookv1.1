Template.createFeed.helpers({
  user: function(){
    return User.find();
  }
});
Template.createFeed.events({
  "click button": function(){
    var email = $("#user option:selected").attr("value");
    var description = $("#desription").val();
    var feedType = $("input[name=feedOption]:checked").val();


    Achievements.insert({
      email: email,
      description: description,
      feedType: feedType,
      createdAt: new Date() // current time
    });

  }
});
