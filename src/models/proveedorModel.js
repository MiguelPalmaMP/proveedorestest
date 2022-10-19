const mongoose = require("mongoose");

const proveedorSchema = mongoose.Schema({
    client_id: {
        type: String,
        maxLength: 40
    },
    email: {
        type: String,
        maxLength: 241
    },
    rfc: {
        type: String,
        maxLength: 30
    },
    city: {
        type: String,
        maxLength: 71
    },
    country: {
        type: String,
        maxLength: 3
    },
    cp: {
        type: String,
        maxLength: 10
    },
    name: {
        type: String,
        maxLength: 120
    },
    region: {
        type: String,
        maxLength: 3
    },
    street: {
        type: String,
        maxLength: 150
    },
    surname: {
        type: String,
        maxLength: 120
    },
    title: {
        type: String,
        maxLength: 15
    },
    regimen_fiscal: {
        type: String,
        maxLength: 6
    }
});

module.exports = mongoose.model("proveedore", proveedorSchema);