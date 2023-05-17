const mongoose = require("mongoose");

// must put dotenv config before anything else so that it is available globally
const dotenv = require("dotenv").config({path: "./config.env"});

const app = require(`${__dirname}/app`);

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {
	console.log("Connected to DB");
});

const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Now listening on port ${port}!`);
});
