const mongoose = require('mongoose');
require('dotenv').config();

const mongodb = () => {mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to Atlas"))
	.catch((err) => console.error(err));
}
module.exports = mongodb;