Feedback = new Mongo.Collection("feedback");

Template.feedback.events({"click #submit-feedback": function (event) {
	event.preventDefault();
	console.log("I'm submitting a feedback");
	var content = $("#content").val();
	var anonymous = $("#anonymous").attr("value");
	// var likes = [];
	// var unlikes = [];
	// var comments = [];
	Feedback.insert({
		'content': content,
		'anonymous': anonymous,
		'likes': [],
		'unlikes': [],
		'comments': [],
		'poster': "hehehe",
		'createdAt': new Date()
	});
}});