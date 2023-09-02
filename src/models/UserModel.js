const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "User First Name required"]
    },
    lastName: {
        type: String,
        required: [true, "User Last Name required"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true, versionKey: false
}
);

// Define a virtual property for cart items
userSchema.virtual('cartItems', {
    ref: 'CartModel',
    localField: '_id',
    foreignField: 'user',
});

// Define a virtual property for orders
userSchema.virtual('orders', {
    ref: 'OrderModel',
    localField: '_id',
    foreignField: 'user',
});

// Middleware to remove associated cart items when a user is deleted
userSchema.pre('remove', async function (next) {
    try {
        await mongoose.model('cartItems').deleteMany({ user: this._id });
        next();
    } catch (error) {
        next(error);
    }
});


const UserModel = mongoose.model('users', DataSchema);
module.exports = UserModel;