const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel',
        required: true,
    },
    items: [
        {
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
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
        min: 0, // Ensure totalAmount is a positive value
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: 'Pending',
    },
});

const OrderModel = mongoose.model('orders', DataSchema);

module.exports = OrderModel;
