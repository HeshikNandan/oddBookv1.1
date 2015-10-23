Template.feedback.events({
	"click #submit-feedback": function (event) {
		event.preventDefault();
		console.log("I'm submitting a feedback");
		var content = $("#content").val();
		var anonymous = $("#anonymous").is(":checked");
		Feedback.insert({
			'content': content,
			'anonymous': anonymous,
			'likes': [],
			'unlikes': [],
			'comments': [],
			'poster': "hehehe",
			'createdAt': new Date()
		});
	}
});

Template.feedback.helpers({
	feedbacks: function() {
		return Feedback.find();
	}
});

