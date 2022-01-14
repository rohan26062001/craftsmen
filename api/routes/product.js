var express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Uniqe Id using Data and Time [2021-11-30-09-47-03-product1.png]

var datetime = new Date();
var dateString = new Date(
    datetime.getTime() - datetime.getTimezoneOffset() * 60000
);
var uniqueid = dateString.toISOString().replace("T", "-").replace(/[:]/g, '-').substr(0, 19);

/// GET POST [ GET ALL PRODUCTS , POST NEW PRODUCT]

router.route('/').get(async (req, res) => {  // GET All Products
    try {
        const product = await Product.find()
        res.send(product)
    }
    catch (err) {
        res.status(500).send({ error: err })
    }

}).post(async (req, res) => {   // POST new Product
    var productname = ''
    if (req.files) {    // FILE UPLOAD
        var file = req.files.file
        productname = uniqueid + '-' + file.name  // Uniqe File Name
        file.mv('./uploads/' + productname, (err, result) => {
            if (err)
                throw err
        })

        const product = new Product({ // New Product Detels
            title: req.body.title,
            desc: req.body.desc,
            categories: req.body.categories,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            image: productname
        })
        try {
            const newProduct = await product.save() // Save Product MogoDB
            res.send(newProduct)
        }
        catch (err) {
            res.status(500).send({ error: err }) // Get Error uploading Product
        }
    }
    else {
        const product = new Product({ // New Product Detels
            title: req.body.title,
            desc: req.body.desc,
            categories: req.body.categories,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
            image: ''
        })
        try {
            const newProduct = await product.save() // Save Product MogoDB
            res.send(newProduct)
        }
        catch (err) {
            res.status(500).send({ error: err }) // Get Error uploading Product
        }
    }


})

///GET DELETE PATCH Product By ID

router.route('/:id').get(async (req, res) => {   // GET Product By ID
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    }
    catch (err) {
        res.status(500).send({ error: err })
    }
}).delete(async (req, res) => {    // DELETE Product By ID
    try {
        await Product.findByIdAndRemove(req.params.id)
        res.send('Delete Product Secsfully')
    }
    catch (err) {
        res.status(500).send({ error: err })
    }
    res.send(req.params.id)
}).patch(async (req, res) => {     // PATCH Product By ID


    if (req.files) {    // FILE UPLOAD
        var file = req.files.file
        var productname = uniqueid + '-' + file.name  // Uniqe File Name

        // console.log(productname)
        file.mv('./uploads/' + productname, (err, result) => {
            if (err)
                throw err

        })

        try {
            const updateProduct = { // New Product Detels
                title: req.body.title,
                desc: req.body.desc,
                categories: req.body.categories,
                size: req.body.size,
                color: req.body.color,
                price: req.body.price,
                image: productname
            }
            const product = await Product.findByIdAndUpdate(req.params.id, updateProduct)
            res.send(product)
        }
        catch (err) {
            res.status(400).send({ error: err })
        }
    }
    else {
        try {
            const updateProduct = { // New Product Detels
                title: req.body.title,
                desc: req.body.desc,
                categories: req.body.categories,
                size: req.body.size,
                color: req.body.color,
                price: req.body.price,
            }
            const product = await Product.findByIdAndUpdate(req.params.id, updateProduct)
            res.send(product)
        }
        catch (err) {
            res.status(400).send({ error: err })
        }
    }




})

module.exports = router;