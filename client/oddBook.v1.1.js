

if (Meteor.isClient) {

Template.createNewUser.events({
  "click button" : function(){
    Router.go("createUser");
  }
})
  //Set value to the select option

}
