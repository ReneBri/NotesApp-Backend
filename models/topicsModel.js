const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
	topicTitle: {
		type: String,
		required: true,
	},
	topicSubtitle: {
		type: String,
		required: true,
	},
	createdOn: {
		type: String,
		required: true,
	},
	creatorId: {
		type: String,
		required: true,
	},
	uid: {
		type: String,
		required: true,
	},
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
