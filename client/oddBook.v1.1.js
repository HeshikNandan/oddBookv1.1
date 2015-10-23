

if (Meteor.isClient) {

Template.createNewUser.events({
  "click button" : function(){
    Router.go("createUser");
  }
})

Template.feedbackSection.events({
	"click button": function() {
		Router.go("feedback");
	}
});
  //Set value to the select option

}
