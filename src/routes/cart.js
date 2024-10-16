const express = require('express');
const cartRouter = express.Router();
const mongoose = require('mongoose');

// Route to save product details to the cart
cartRouter.post('/cart/add', async (req, res) => {
    try {
        const { emailId, type, fabric, style, price, size, quantity } = req.body;

        // Check if all necessary fields are provided
        if (!emailId || !type || !fabric || !style || !price || !size || !quantity) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Ensure that the MongoDB connection is active
        if (!mongoose.connection.readyState) {
            return res.status(500).json({ error: 'Database connection not established' });
        }

        // Get native MongoDB connection
        const db = mongoose.connection.db;

        // Access the 'cart' collection dynamically
        const cartCollection = db.collection('cart');

        // Insert the product details into the cart collection
        const cartData = {
            emailId,           
            type,
            fabric,
            style,
            new_price: price,
            size,
            quantity
        };

        console.log("Inserting data:", cartData);

        // Insert into cart collection
        const result = await cartCollection.insertOne(cartData);

        // Check if insertion was successful
        if (result.acknowledged) {
            return res.json({ message: 'Product added to cart successfully', cart: cartData });
        } else {
            return res.status(500).json({ error: 'Failed to add product to cart' });
        }

    } catch (error) {
        console.error('Error saving product to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

cartRouter.post('/cart', async (req, res) => {
    try {
        const { emailId } = req.body; // Extract emailId from request body

        // Check if emailId is provided
        if (!emailId) {
            return res.status(400).json({ error: 'emailId is required' });
        }

        // Ensure that the MongoDB connection is active
        if (!mongoose.connection.readyState) {
            return res.status(500).json({ error: 'Database connection not established' });
        }

        // Get native MongoDB connection
        const db = mongoose.connection.db;

        // Access the 'cart' collection dynamically
        const cartCollection = db.collection('cart');

        // Fetch items from cart for the given emailId
        const cartItems = await cartCollection.find({ emailId }).toArray();

        if (cartItems.length === 0) {
            return res.status(404).json({ message: "No items found in cart" });
        }

        // Return the cart items
        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = cartRouter;
