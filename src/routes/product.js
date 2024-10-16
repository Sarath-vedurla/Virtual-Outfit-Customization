const express = require('express');
const Product = require('../models/product');
const productRouter = express.Router();

// Fetch all products
productRouter.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Fetch specific product based on type, fabric, and style
productRouter.post('/products/search', async (req, res) => {
    const { type, fabric, style } = req.body;

    try {
        // Search for the product based on type, fabric, and style
        const product = await Product.findOne({ type, fabric, style });

        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        // Return only the price field
        const { price } = product;
        res.status(200).json({ price });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "Failed to fetch the product" });
    }
});

module.exports = productRouter;
