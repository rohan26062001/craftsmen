const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    categories: {
        type: Array,
        required: false,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {

        type: String,
        require: true,
    }

});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
