const express = require('express');
const mongoose = require('mongoose');
const proveedorRoutes = require("./routes/proveedor");
const mongodb = require("./config/db");
require('dotenv').config();


const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use("/api/proveedores", proveedorRoutes);

//routes
app.get('/', (req, res) => {
	res.send("Testing index server");
});

//mongodb connection

mongodb();
app.listen(port, () => console.log("server listening on port", port));
