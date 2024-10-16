import React, { useState } from 'react';
import axios from 'axios';
import './css/GenerateImage.css';

const GenerateImage = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const generateImage = async () => {
    const form = new FormData();
    form.append('prompt', prompt);
    form.append('output_format', 'webp');

    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      const response = await axios.post('https://api.stability.ai/v2beta/stable-image/generate/ultra', form, {
        headers: {
          'Authorization': 'Bearer sk-zceUZoBuYNYtYYl4cDkZYiQeRjc2NVsYR48l7frOOEVzoDDx', // Replace with your actual API key
          'Accept': 'image/*',
        },
        responseType: 'arraybuffer',
      });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'image/webp' });
        const imageURL = URL.createObjectURL(blob);
        setImageUrl(imageURL);
      } else {
        throw new Error(`Failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setError(`Error: ${error.message || "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateClick = () => {
    if (prompt.trim()) {
      generateImage();
    } else {
      alert("Please enter a prompt.");
    }
  };

  const handleAddToCart = () => {
    if (imageUrl) {
      alert('Your image has been added to the cart!'); // Alert user when button is clicked
    }
  };

  return (
    <div className="generate-image-container">
      <h2>Image Generator</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        className="prompt-input"
      />
      <button onClick={handleGenerateClick} className="generate-button">
        Generate Image
      </button>
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {imageUrl && (
        <div className="image-container">
          <img src={imageUrl} alt="Generated" className="generated-image" />
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateImage;
