const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 0; // Custom validation logic
            },
            message: 'Price must be a non-negative number'
        },
    },
    stock: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Stock must be a non-negative number'
        },

    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,

    }
})

const ProductModel = mongoose.model('products', DataSchema);
module.exports = ProductModel;