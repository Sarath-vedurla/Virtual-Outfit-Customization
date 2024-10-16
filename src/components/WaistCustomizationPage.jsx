import React, { useState } from 'react';
import './css/WaistCustomizationPage.css'; // External CSS for advanced styling WaistCustomizationPage
import { useNavigate } from 'react-router-dom';

// Images for the dresses based on fabric and style
const waistDressImages = {
  'Barnet': {
    'Natural-waist': '/images/Barnet1.png',
    'Wrapped': '/images/Barnet2.png',
    'Empire-waist': '/images/Barnet3.png',
    'Flared-top': '/images/Barnet4.png',
    'Blousan': '/images/Barnet5.png',
    'Strappy-v': '/images/Barnet6.png',
    'One-shoulder': '/images/Barnet7.png',
    'Flared': '/images/Barnet8.png',
    'High-low': '/images/Barnet9.png',
    'With-sleeves': '/images/Barnet10.png',
    'Without-sleeves': '/images/Barnet1.png',
  },
  'Olivia': {
                'Natural-waist':'/images/Olivia1.png',
                'Wrapped':'/images/Olivia2.png',
                'Empire-waist':'/images/Olivia3.png',
                'Flared-top':'/images/Olivia4.png',
                'Blousan':'/images/Olivia5.png',
                'Strappy-v':'/images/Olivia6.png',
                'One-shoulder':'/images/Olivia7.png',
                'Flared':'/images/Olivia8.png',
                'High-low':'/images/Olivia9.png',
                'With-sleeves':'/images/Olivia10.png',
                'Without-sleeves':'/images/Olivia1.png',
            },
            'Arwel': {
                'Natural-waist':'/images/Arwel1.png',
                'Wrapped':'/images/Arwel2.png',
                'Empire-waist':'/images/Arwel3.png',
                'Flared-top':'/images/Arwel4.png',
                'Blousan':'/images/Arwel5.png',
                'Strappy-v':'/images/Arwel6.png',
                'One-shoulder':'/images/Arwel7.png',
                'Flared':'/images/Arwel8.png',
                'High-low':'/images/Arwel9.png',
                'With-sleeves':'/images/Arwel10.png',
                'Without-sleeves':'/images/Arwel1.png',
            },
            'Kyla': {
                'Natural-waist':'/images/Kyla1.png',
                'Wrapped':'/images/Kyla2.png',
                'Empire-waist':'/images/Kyla3.png',
                'Flared-top':'/images/Kyla4.png',
                'Blousan':'/images/Kyla5.png',
                'Strappy-v':'/images/Kyla6.png',
                'One-shoulder':'/images/Kyla7.png',
                'Flared':'/images/Kyla8.png',
                'High-low':'/images/Kyla9.png',
                'With-sleeves':'/images/Kyla10.png',
                'Without-sleeves':'/images/Kyla1.png',
            },
            'Libbie': {
                'Natural-waist':'/images/Libbie1.png',
                'Wrapped':'/images/Libbie2.png',
                'Empire-waist':'/images/Libbie3.png',
                'Flared-top':'/images/Libbie4.png',
                'Blousan':'/images/Libbie5.png',
                'Strappy-v':'/images/Libbie6.png',
                'One-shoulder':'/images/Libbie7.png',
                'Flared':'/images/Libbie8.png',
                'High-low':'/images/Libbie9.png',
                'With-sleeves':'/images/Libbie10.png',
                'Without-sleeves':'/images/Libbie1.png',
            },
            'Cally': {
                'Natural-waist':'/images/Cally1.png',
                'Wrapped':'/images/Cally2.png',
                'Empire-waist':'/images/Cally3.png',
                'Flared-top':'/images/Cally4.png',
                'Blousan':'/images/Cally5.png',
                'Strappy-v':'/images/Cally6.png',
                'One-shoulder':'/images/Cally7.png',
                'Flared':'/images/Cally8.png',
                'High-low':'/images/Cally9.png',
                'With-sleeves':'/images/Cally10.png',
                'Without-sleeves':'/images/Cally1.png',
            },
        

};

const fabricImages = {
  'Barnet': './images/Barnet.jpg',
  'Olivia': './images/olivia.jpg',
  'Arwel': './images/arwel.jpg',
  'Kyla': './images/kyla.jpg',
  'Libbie': './images/libbie.jpg',
  'Cally': './images/cally.jpg',
};

const styleImages = {
  'Natural-waist': '/images/Natural-waist.png',
  'Wrapped': '/images/Wrapped.png',
  'Empire-waist': '/images/Empire-waist.png',
  'Flared-top': '/images/Flared-top.png',
  'Blousan': '/images/Blousan.png',
  'Strappy-v': '/images/Strappy-v.png',
  'One-shoulder': '/images/One-shoulder.png',
  'Flared': '/images/Flared.png',
  'High-low': '/images/High-low.png',
  'With-sleeves': '/images/With-sleeves.png',
  'Without-sleeves': '/images/Without-sleeves.png',
};

const WaistCustomizationPage = () => {
  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // For routing to details page

  const handleFabricChange = (fabric) => {
    setSelectedFabric(fabric);
    setSelectedStyle(''); // Reset style when fabric changes
  };

  const handleStyleChange = (style) => {
    if (selectedFabric) {
      setSelectedStyle(style);
    } else {
      alert('Please select a fabric first.');
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getImageForSelection = () => {
    if (selectedFabric) {
      if (selectedStyle) {
        return waistDressImages[selectedFabric][selectedStyle];
      } else {
        return waistDressImages[selectedFabric]['Natural-waist'];
      }
    }
    return '';
  };

  const handleAddToCart = () => {
    const dressDetails = {
      fabric: selectedFabric,
      style: selectedStyle,
      size: selectedSize,
      quantity: quantity,
      imageUrl: getImageForSelection(),
    };

    // Navigate to the details page and pass dressDetails as state
    console.log(dressDetails);
    navigate('/dressdetails', { state: { dressDetails } });
  };

  return (
    <div className="customization-page">
      {/* Left Section: Fabric and Style Buttons */}
      <div className="selection-section">
        <div className="fabric-selection">
          <h2>Choose Fabric</h2>
          <div className="fabric-buttons">
            {Object.keys(waistDressImages).map((fabric) => (
              <div className="fabric-button-container" key={fabric}>
                <button
                  onClick={() => handleFabricChange(fabric)}
                  className={`fabric-button ${selectedFabric === fabric ? 'active' : ''}`}
                >
                  <img
                    src={fabricImages[fabric]}
                    alt={fabric}
                    className="fabric-image"
                  />
                </button>
                <p className="fabric-name">{fabric}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="style-selection">
          <h2>Select Style</h2>
          <div className="style-buttons">
            {Object.keys(styleImages).map((style) => (
              <div className="style-button-container" key={style}>
                <button
                  onClick={() => handleStyleChange(style)}
                  className={`style-button ${selectedStyle === style ? 'active' : ''}`}
                  disabled={!selectedFabric}
                >
                  <img
                    src={styleImages[style]}
                    alt={style}
                    className="style-image"
                  />
                </button>
                <p className="style-name">{style.replace(/-/g, ' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Dress Image Preview, Size & Quantity Selection */}
      <div className="preview-section">
        <div className="dress-preview">
          {selectedFabric ? (
            <img src={getImageForSelection()} alt="Dress Preview" />
          ) : (
            <p>Select a fabric to preview the dress.</p>
          )}
        </div>

        {/* Size and Quantity Selection */}
        <div className="dress-options">
          <div className="size-quantity-section">
            <div className="size-selection">
              <h3>Select Size</h3>
              <div className="size-buttons">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="quantity-section">
              <h3>Quantity</h3>
              <div className="quantity-buttons">
                <button className="quantity-button" onClick={decreaseQuantity} disabled={quantity === 1}>
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-button" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaistCustomizationPage;
