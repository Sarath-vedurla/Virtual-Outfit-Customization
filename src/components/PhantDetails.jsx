import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './css/PhantDetails.css'; // Import CSS for styling
import { BASE_URL } from '../utils/constants'; // Import the base URL for API requests



// Price adjustments based on pant sizes
const sizePriceAdjustments = {
  28: 50,
  30: 75,
  32: 100,
  34: 125,
  36: 150,
};

const PhantDetails = () => {
  const location = useLocation();
  const { pantDetails } = location.state || {}; // Get pant details from location state
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

    if (pantDetails) {
      const fabricLower = pantDetails.fabric.toLowerCase(); // Convert fabric to lowercase
      const styleLower = (pantDetails.style || 'Skinny-Fit').toLowerCase(); // Convert style to lowercase

      // Make the API call to get the base price for the fabric and style
      axios
        .post(`${BASE_URL}/products/search`, {
          type: 'phants', // Change type to 'pants'
          fabric: fabricLower,
          style: styleLower,
        })
        .then((response) => {
          const basePrice = response.data.price;

          // Calculate the adjusted price based on the size and quantity
          const sizeAdjustment = sizePriceAdjustments[pantDetails.size] || 0;
          const adjustedPrice = basePrice + sizeAdjustment;
          const finalTotalPrice = adjustedPrice * pantDetails.quantity;

          setPrice(basePrice); // Set the base price from the backend response
          setTotalPrice(finalTotalPrice); // Set the final total price
        })
        .catch((error) => {
          console.error('Error fetching product price:', error);
          setError('Failed to fetch price. Please try again later.');
        });
    }
  }, [pantDetails]);

  const handleAddToCart = () => {
    if (!email) {
      setError('User is not logged in. Please log in to add items to the cart.');
      return;
    }

    const cartData = {
      emailId: email, // Use the email retrieved from profile API
      type: 'phants',
      fabric: pantDetails.fabric,
      style: pantDetails.style || 'Skinny-Fit',
      price: totalPrice, // Use the calculated total price
      size: pantDetails.size,
      quantity: pantDetails.quantity,
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

  if (!pantDetails) {
    return <p>No pant data available.</p>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="pant-image">
          <img 
            src={pantDetails.imageUrl} 
            alt="Pant Preview" 
          />
        </div>
        <div className="pant-details">
          <h2>Pant Details</h2>
          <p><strong>Fabric:</strong> {pantDetails.fabric}</p>
          <p><strong>Style:</strong> {pantDetails.style || 'Skinny-Fit'}</p>
          <p><strong>Size:</strong> {pantDetails.size}</p>
          <p><strong>Quantity:</strong> {pantDetails.quantity}</p>
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

export default PhantDetails;
