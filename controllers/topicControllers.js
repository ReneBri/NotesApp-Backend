const Topic = require("../models/topicsModel");

// all topic handlers for '/'
exports.getAllTopics = async (req, res) => {
	try {
		const topics = await Topic.find({});
		res.status(200).json({
			status: "success",
			data: topics,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			data: "resources could not be found",
		});
	}
};

exports.createTopic = async (req, res) => {
	console.log(req.body);
	try {
		const newTopic = await Topic.create(req.body);
		res.status(200).json({
			status: "success",
			data: newTopic,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err.message,
		});
	}
};
