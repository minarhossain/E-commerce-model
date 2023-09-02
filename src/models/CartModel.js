const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductModel',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1, // Ensure quantity is a positive integer
    },
});

const CartItem = mongoose.model('cartItems', DataSchema);

module.exports = CartItem;
