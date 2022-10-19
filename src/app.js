const express = require('express');
const mongoose = require('mongoose');
const proveedorRoutes = require("./routes/proveedor");
require('dotenv').config();


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api", proveedorRoutes);

//routes
app.get('/', (req, res) => {
	res.send("Testing index server");
});

//mongodb connection

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected to Atlas"))
	.catch((err) => console.error(err));

app.listen(port, () => console.log("server listening on port", port));