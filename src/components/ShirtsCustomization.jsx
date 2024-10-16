import React, { useState } from 'react';
import './css/Shirtcustomization.css'; // External CSS for advanced styling
import { useNavigate } from 'react-router-dom';
const shirtImages = {
  'poplin-white': {
    'New-Kint': '/images/s1.png',
    'Kent-Collar': '/images/s2.png',
    'button-down': '/images/s3.png',
    'Stand-up': '/images/s4.png',
    'wing-collar': '/images/s5.png',
    'Rounded-collar': '/images/s6.png',
    'single cuff-1': '/images/s7.png',
    'single cuff-2': '/images/s8.png',
    'short-hands': '/images/s9.png',
    'no-pocket': '/images/s6.png',
    'pocket': '/images/s10.png',
  },
  'poplin-mid-blue': {
    'New-Kint': '/images/d1.png',
    'Kent-Collar': '/images/d2.png',
    'button-down': '/images/d3.png',
    'Stand-up': '/images/d4.png',
    'wing-collar': '/images/d5.png',
    'Rounded-collar': '/images/d6.png',
    'single cuff-1': '/images/d7.png',
    'single cuff-2': '/images/d8.png',
    'short-hands':'/images/d10.png',
    'no-pocket':'/images/d6.png',
    'pocket':'/images/d9.png',
},
'poplin-cotton-blue': {
    'New-Kint': '/images/r1.png',
    'Kent-Collar': '/images/r2.png',
    'button-down': '/images/r3.png',
    'Stand-up': '/images/r5.png',
    'wing-collar': '/images/r4.png',
    'Rounded-collar': '/images/r6.png',
    'single cuff-1': '/images/r7.png',
    'single cuff-2': '/images/r8.png',
    'short-hands':'/images/r9.png',
    'no-pocket':'/images/r6.png',
    'pocket':'/images/r10.png',
},
'poplin-deep-blue': {
    'New-Kint': '/images/b1.png',
    'Kent-Collar': '/images/b2.png',
    'button-down': '/images/b3.png',
    'Stand-up': '/images/b4.png',
    'wing-collar': '/images/b5.png',
    'Rounded-collar': '/images/b6.png',
    'single cuff-1': '/images/b7.png',
    'single cuff-2': '/images/b8.png',
    'short-hands':'/images/b10.png',
    'no-pocket':'/images/b6.png',
    'pocket':'/images/b9.png',
},
'cotton-blue': {
    'New-Kint': '/images/c1.png',
    'Kent-Collar': '/images/c2.png',
    'button-down': '/images/c3.png',
    'Stand-up': '/images/c4.png',
    'wing-collar': '/images/c5.png',
    'Rounded-collar': '/images/c6.png',
    'single cuff-1': '/images/c7.png',
    'single cuff-2': '/images/c8.png',
    'short-hands':'/images/c9.png',
    'no-pocket':'/images/c6.png',
    'pocket':'/images/c10.png',
},
'oxford-mid-blue': {
    'New-Kint': '/images/p1.png',
    'Kent-Collar': '/images/p2.png',
    'button-down': '/images/p3.png',
    'Stand-up': '/images/p4.png',
    'wing-collar': '/images/p5.png',
    'Rounded-collar': '/images/p6.png',
    'single cuff-1': '/images/p7.png',
    'single cuff-2': '/images/p8.png',
    'short-hands':'/images/p10.png',
    'no-pocket':'/images/p6.png',
    'pocket':'/images/p9.png',
},
'Bengal-stripes': {
    'New-Kint': '/images/be1.png',
    'Kent-Collar': '/images/be2.png',
    'button-down': '/images/be3.png',
    'Stand-up': '/images/be4.png',
    'wing-collar': '/images/be5.png',
    'Rounded-collar': '/images/be6.png',
    'single cuff-1': '/images/be6.png',
    'single cuff-2': '/images/be7.png',
    'short-hands':'/images/bes1.png',
    'no-pocket':'/images/be6.png',
    'pocket':'/images/bep10.png',
},
'Knitted': {
    'New-Kint': '/images/kn1.png',
    'Kent-Collar': '/images/kn2.png',
    'button-down': '/images/kn3.png',
    'Stand-up': '/images/kn4.png',
    'wing-collar': '/images/kn5.png',
    'Rounded-collar': '/images/kn6.png',
    'single cuff-1': '/images/kn7.png',
    'single cuff-2': '/images/kn8.png',
    'short-hands':'/images/kns10.png',
    'no-pocket':'/images/kn6.png',
    'pocket':'/images/knp9.png',
},
'Lenin-cotton': {
    'New-Kint': '/images/le1.png',
    'Kent-Collar': '/images/le2.png',
    'button-down': '/images/le3.png',
    'Stand-up': '/images/le4.png',
    'wing-collar': '/images/le5.png',
    'Rounded-collar': '/images/le6.png',
    'single cuff-1': '/images/le7.png',
    'single cuff-2': '/images/le8.png',
    'short-hands':'/images/les9.png',
    'no-pocket':'/images/le6.png',
    'pocket':'/images/lep10.png',
},
'Wrinkle-Free': {
    'New-Kint': '/images/wr1.png',
    'Kent-Collar': '/images/wr2.png',
    'button-down': '/images/wr3.png',
    'Stand-up': '/images/wr4.png',
    'wing-collar': '/images/wr5.png',
    'Rounded-collar': '/images/wr6.png',
    'single cuff-1': '/images/wr7.png',
    'single cuff-2': '/images/wr8.png',
    'short-hands':'/images/wrs10.png',
    'no-pocket':'/images/wr6.png',
    'pocket':'/images/wrp9.png',
},
'Easy-iron': {
    'New-Kint': '/images/ea1.png',
    'Kent-Collar': '/images/ea2.png',
    'button-down': '/images/ea3.png',
    'Stand-up': '/images/ea4.png',
    'wing-collar': '/images/ea5.png',
    'Rounded-collar': '/images/ea6.png',
    'single cuff-1': '/images/ea7.png',
    'single cuff-2': '/images/ea8.png',
    'short-hands':'/images/eas9.png',
    'no-pocket':'/images/ea6.png',
    'pocket':'/images/eap10.png',
},
'Creepe': {
    'New-Kint': '/images/cr1.png',
    'Kent-Collar': '/images/cr2.png',
    'button-down': '/images/cr3.png',
    'Stand-up': '/images/cr4.png',
    'wing-collar': '/images/cr5.png',
    'Rounded-collar': '/images/cr6.png',
    'single cuff-1': '/images/cr7.png',
    'single cuff-2': '/images/cr8.png',
    'short-hands':'/images/crs10.png',
    'no-pocket':'/images/cr6.png',
    'pocket':'/images/crp9.png',
},
'Double-stripe': {
    'New-Kint': '/images/do1.png',
    'Kent-Collar': '/images/do2.png',
    'button-down': '/images/do3.png',
    'Stand-up': '/images/do4.png',
    'wing-collar': '/images/do5.png',
    'Rounded-collar': '/images/do6.png',
    'single cuff-1': '/images/do7.png',
    'single cuff-2': '/images/do8.png',
    'short-hands':'/images/dsp10.png',
    'no-pocket':'/images/do6.png',
    'pocket':'/images/dss9.png',
},
'Micro-pattern': {
    'New-Kint': '/images/mi1.png',
    'Kent-Collar': '/images/mi2.png',
    'button-down': '/images/mi3.png',
    'Stand-up': '/images/mi4.png',
    'wing-collar': '/images/mi5.png',
    'Rounded-collar': '/images/mi6.png',
    'single cuff-1': '/images/mi7.png',
    'single cuff-2': '/images/mi8.png',
    'short-hands':'/images/mis10.png',
    'no-pocket':'/images/mi6.png',
    'pocket':'/images/mip9.png',
},
};

const fabricImages = {
  'poplin-white': '/images/poplin-white-fabric.png',
  'poplin-mid-blue': '/images/poplin-mid-blue.png',
  'poplin-cotton-blue': '/images/poplin-cotton-blue.png',
  'poplin-deep-blue': '/images/poplin-deep-blue.png',
  'cotton-blue': '/images/cotton-blue.png',
  'oxford-mid-blue': '/images/oxford-mid-blue.png',
  'Bengal-stripes': '/images/Bengal-stripes.png',
  'Knitted': '/images/Knitted.png',
  'Lenin-cotton': '/images/Lenin-cotton.png',
  'Wrinkle-Free': '/images/Wrinkle-Free.png',
  'Easy-iron': '/images/Easy-iron.png',
  'Creepe': '/images/Creepe.png',
  'Double-stripe': '/images/Double-stripe.png',
  'Micro-pattern': '/images/Micro-pattern.png',
  'others': '/images/AI.png'
};

const styleImages = {
  'New-Kint': '/images/k1.png',
  'Kent-Collar': '/images/k2.png',
  'button-down': '/images/k3.png',
  'Stand-up': '/images/k5.png',
  'wing-collar': '/images/k4.png',
  'Rounded-collar': '/images/k6.png',
  'single cuff-1': '/images/k7.png',
  'single cuff-2': '/images/k8.png',
  'short-hands': '/images/k12.png',
  'no-pocket': '/images/k11.png',
  'pocket': '/images/k10.png',
};

const ShirtsCustomization = () => {
  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 
  const handleFabricChange = (fabric) => {
    if (fabric === 'others') {
        // Navigate to the AI-generated fabric customization page
        navigate('/aigeneration');
    } else {
        setSelectedFabric(fabric);
        setSelectedStyle('');
    }
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
        return shirtImages[selectedFabric][selectedStyle];
      } else {
        return shirtImages[selectedFabric]['New-Kint'];
      }
    }
    return '';
  };

  const handleAddToCart = () => {
    const shirtDetails = {
      fabric: selectedFabric,
      style: selectedStyle,
      size: selectedSize,
      quantity: quantity,
      imageUrl: getImageForSelection(), // get the selected shirt image URL
    };

    // Navigate to the DetailsPage and pass shirtDetails as state
    console.log(shirtDetails);
    navigate('/shirtdetails', { state: { shirtDetails } });
  };

  return (
    <div className="customization-page">
      {/* Left Section: Fabric and Style Buttons */}
      <div className="selection-section">
        <div className="fabric-selection">
          <h2>Choose Fabric</h2>
          <div className="fabric-buttons">
            {Object.keys(shirtImages).map((fabric) => (
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
                <p className="fabric-name">{fabric.replace(/-/g, ' ')}</p>
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

      {/* Right Section: Shirt Image Preview, Size & Quantity Selection */}
      <div className="preview-section">
        <div className="shirt-preview">
          {selectedFabric ? (
            <img src={getImageForSelection()} alt="Shirt Preview" />
          ) : (
            <p>Select a fabric to preview the shirt.</p>
          )}
        </div>

        {/* Size and Quantity Selection */}
        <div className="shirt-options">
          <div className="size-quantity-section">
            <div className="size-selection">
              <h3>Select Size</h3>
              <div className="size-buttons">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
              <h3>Quantity  </h3>
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

export default ShirtsCustomization;
