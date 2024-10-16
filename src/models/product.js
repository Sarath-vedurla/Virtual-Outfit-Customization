const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    fabric: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Product', productSchema);
