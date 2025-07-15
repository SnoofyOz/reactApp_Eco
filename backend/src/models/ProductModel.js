const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    countInStock: { type: Number, required: false },
    rating: { type: Number, default: 0, required: false }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
