const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({
			status: "success",
			users,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err.message,
		});
	}
};

exports.createUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);
		res.status(200).json({
			status: "success",
			user: newUser,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err.message,
		});
	}
};

// with ID parameter

exports.getSingleUser = async (req, res) => {
	const id = req.params.id;
	try {
		const foundUser = await User.findOne({
			userId: id,
		});
		if (foundUser) {
			res.status(200).json({
				status: "success",
				user: foundUser,
			});
		} else throw new Error("no User found");
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: err.message,
		});
	}
};
