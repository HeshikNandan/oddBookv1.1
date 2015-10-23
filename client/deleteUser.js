Template.deleteUser.helpers({
  user : function(){
    return User.find();
  }
});
Template.deleteUser.events({
  "click button": function(){
    var email = $("#user option:selected").attr("value");
    var user = User.findOne({"email" : email});
    User.remove(user._id);
  }
});
