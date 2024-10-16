import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './css/Details.css'; // Import CSS for styling
import { BASE_URL } from '../utils/constants'; // Import the base URL for API requests


// Price adjustments based on dress sizes
const sizePriceAdjustments = {
  XS: 50,
  S: 75,
  M: 100,
  L: 125,
  XL: 150,
};

const DressDetails = () => {
  const location = useLocation();
  const { dressDetails } = location.state || {}; // Get dress details from location state
  const [email, setEmail] = useState(''); // State to store the user's email
  const [price, setPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null); // Store calculated total price
  const [error, setError] = useState(''); // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  useEffect(() => {
    // Fetch user profile to get the email
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/profile`, {}, { withCredentials: true }); // API call with withCredentials
        setEmail(response.data.emailId); // Set the email state from the response
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError('Failed to fetch user profile. Please log in again.');
      }
    };

    fetchUserProfile(); // Call the fetch function

    if (dressDetails) {
      const fabricLower = dressDetails.fabric.toLowerCase(); // Convert fabric to lowercase
      const styleLower = dressDetails.style.toLowerCase(); // Convert style to lowercase

      // Make the API call to get the base price for the fabric and style
      axios
        .post(`${BASE_URL}/products/search`, {
          type: 'dress', // Assuming 'dress' is the type
          fabric: fabricLower,
          style: styleLower,
        })
        .then((response) => {
          const basePrice = response.data.price;

          // Calculate the adjusted price based on the size and quantity
          const sizeAdjustment = sizePriceAdjustments[dressDetails.size] || 0;
          const adjustedPrice = basePrice + sizeAdjustment;
          const finalTotalPrice = adjustedPrice * dressDetails.quantity;

          setPrice(basePrice); // Set the base price from the backend response
          setTotalPrice(finalTotalPrice); // Set the final total price
        })
        .catch((error) => {
          console.error('Error fetching product price:', error);
          setError('Failed to fetch price. Please try again later.');
        });
    }
  }, [dressDetails]);

  const handleAddToCart = () => {
    if (!email) {
      setError('User is not logged in. Please log in to add items to the cart.');
      return;
    }

    const cartData = {
      emailId: email, // Use the email retrieved from profile API
      type: 'dress',
      fabric: dressDetails.fabric,
      style: dressDetails.style,
      price: totalPrice, // Use the calculated total price
      size: dressDetails.size,
      quantity: dressDetails.quantity,
    };

    axios
      .post(BASE_URL + "/cart/add", cartData)
      .then((response) => {
        setSuccessMessage(response.data.message || 'Product added to cart successfully');
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        setError('Failed to add product to cart. Please try again.');
      });
  };

  if (!dressDetails) {
    return <p>No dress data available.</p>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="dress-image">
          <img 
            src={dressDetails.imageUrl} 
            alt="Dress Preview" 
          />
        </div>
        <div className="dress-details">
          <h2>Dress Details</h2>
          <p><strong>Fabric:</strong> {dressDetails.fabric}</p>
          <p><strong>Style:</strong> {dressDetails.style}</p>
          <p><strong>Size:</strong> {dressDetails.size}</p>
          <p><strong>Quantity:</strong> {dressDetails.quantity}</p>
          {/* Display Price */}
          {price ? (
            <>
              <p><strong>Base Price:</strong> ₹{price}</p>
              <p><strong>Total Price:</strong> ₹{totalPrice}</p>
              <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
              {successMessage && <p className="success-message">{successMessage}</p>}
            </>
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <p>Loading price...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DressDetails;
