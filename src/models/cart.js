// models/cart.js

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    products: [
        {
            _id: mongoose.Schema.Types.ObjectId,  // Reference to the product id
            type: String,
            customize: String,
            img: String,
            price: Number,
            size: String,
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Cart', cartSchema);
