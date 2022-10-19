const express =  require("express");
const router = express.Router();
const proveedorSchema = require("../models/proveedorModel");

// crete proveedor
router.post("/", (req, res) => {
    const proveedor = proveedorSchema(req.body);
    proveedor
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// get proveedores
router.get("/", (req, res) => {
    proveedorSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// get a proveedor
router.get("/:id", (req, res) => {
    const { id } = req.params;
    proveedorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// update a proveedor
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const {
        client_id,
        email,
        rfc,
        city,
        country,
        cp,
        name,
        region,
        street,
        surname,
        title,
        regimen_fiscal
    } = req.body;
    proveedorSchema
    .updateOne({_id: id}, { $set: {
        client_id,
        email,
        rfc,
        city,
        country,
        cp,
        name,
        region,
        street,
        surname,
        title,
        regimen_fiscal
    }})
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// delete a proveedor
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    proveedorSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router;
