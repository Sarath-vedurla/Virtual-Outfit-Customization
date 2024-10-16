import React, { useState } from 'react';
import './css/PhantCustomization.css'; // External CSS for advanced styling
import { useNavigate } from 'react-router-dom';

const pantImages = {
    'navy-blue': {
        'straight': '/images/nb.png',
        'slim': ' /images/nb2.png',
        'skinny': '/images/nb3.png',
        'bootcut': '/images/nb4.png',
        'classic': '/images/nb.png',
        'rolledup': '/images/nb5.png',
        'zipper': '/images/nb6.png',
        'buttons': '/images/nb7.png',
        'class-pocket':'/images/nb8.png',
        'work-pocket':'/images/nb9.png',
        'unbranded':'/images/nb10.png',
        'class':'/images/nb11.png',
        'rounded':'/images/nb12.png',
        'squared':'/images/nb13.png',
    },
    'mid-blue': {
        'straight': ' /images/mid.png',
        'slim': ' /images/mid2.png',
        'skinny': ' /images/mid3.png',
        'bootcut': ' /images/mid4.png',
        'classic': ' /images/mid.png',
        'rolledup': ' /images/mid6.png',
        'zipper': ' /images/mid7.png',
        'buttons': ' /images/mid8.png',
        'class-pocket':' /images/mid9.png',
        'work-pocket':' /images/mid10.png',
        'unbranded':' /images/mid11.png',
        'class':' /images/mid12.png',
        'rounded':' /images/mid13.png',
        'squared':' /images/mid14.png',
    },
    'light-blue': {
       'straight': ' /images/lbp1.png',
        'slim': ' /images/lbp2.png',
        'skinny': ' /images/lbp3.png',
        'bootcut': ' /images/lbp4.png',
        'classic': ' /images/lbp5.png',
        'rolledup': ' /images/lbp6.png',
        'zipper': ' /images/lbp7.png',
        'buttons': ' /images/lbp8.png',
        'class-pocket':' /images/lbp9.png',
        'work-pocket':' /images/lbp10.png',
        'unbranded':' /images/lbp11.png',
        'class':' /images/lbp12.png',
        'rounded':' /images/lbp13.png',
        'squared':' /images/lbp14.png',
    },
    'pure-black': {
       'straight': ' /images/wbp1.png',
        'slim': ' /images/wbp.png',
        'skinny': ' /images/wbp3.png',
        'bootcut': ' /images/wbp4.png',
        'classic': ' /images/wbp1.png',
        'rolledup': ' /images/wbp6.png',
        'zipper': ' /images/wbp7.png',
        'buttons': ' /images/wbp8.png',
        'class-pocket':' /images/wbp9.png',
        'work-pocket':' /images/wbp10.png',
        'unbranded':' /images/wbp11.png',
        'class':' /images/wbp12.png',
        'rounded':' /images/wbp13.png',
        'squared':' /images/wbp14.png',
    },
    'washed-black': {
        'straight': ' /images/tb.png',
        'slim': ' /images/tb2.png',
        'skinny': ' /images/tb3.png',
        'bootcut': ' /images/tb4.png',
        'classic': ' /images/tb.png',
        'rolledup': ' /images/tb6.png',
        'zipper': ' /images/tb7.png',
        'buttons': ' /images/tb8.png',
        'class-pocket':'/images/tb9.png',
        'work-pocket':'/images/tb10.png',
        'unbranded':'/images/tb11.png',
        'class':'/images/tb12.png',
        'rounded':'/images/tb13.png',
        'squared':'/images/tb14.png',
    },
    'charcoal': {
        'straight': '/images/ch.png',
        'slim': '/images/ch2.png',
        'skinny': '/images/ch3.png',
        'bootcut': '/images/ch4.png',
        'classic': '/images/ch.png',
        'rolledup': '/images/ch6.png',
        'zipper': '/images/ch7.png',
        'buttons': '/images/ch8.png',
        'class-pocket':'/images/ch9.png',
        'work-pocket':'/images/ch10.png',
        'unbranded':'/images/ch11.png',
        'class':'/images/ch12.png',
        'rounded':'/images/ch13.png',
        'squared':'/images/ch14.png',
    },
    'all-white': {
        'straight': '/images/w.png',
        'slim': '/images/w2.png',
        'skinny': '/images/w3.png',
        'bootcut': '/images/w4.png',
        'classic': '/images/w.png',
        'rolledup': '/images/w6.png',
        'zipper': '/images/we.png',
        'buttons': '/images/w8.png',
        'class-pocket':'/images/w9.png',
        'work-pocket':'/images/w10.png',
        'unbranded':'/images/w11.png',
        'class':'/images/w12.png',
        'rounded':'/images/w13.png',
        'squared':'/images/w14.png',
    },
    'cream': {
        'straight': '/images/cr.png',
        'slim': '/images/cr2c.png',
        'skinny': '/images/cr3c.png',
        'bootcut': '/images/cr4c.png',
        'classic': '/images/cr.png',
        'rolledup': '/images/cr6c.png',
        'zipper': '/images/cr7c.png',
        'buttons': '/images/cr8c.png',
        'class-pocket':'/images/cr9.png',
        'work-pocket':'/images/cr10.png',
        'unbranded':'/images/cr11.png',
        'class':'/images/cr12.png',
        'rounded':'/images/cr13.png',
        'squared':'/images/cr14.png',
    },

};

const fabricImages = {
    'navy-blue': '/images/navy-blue.png',
    'mid-blue': '/images/mid-blue.png',
    'light-blue': '/images/light-blue.png',
    'pure-black': '/images/pure-black.png',
    'washed-black': '/images/washed-black.png',
    'charcoal': '/images/Charcoal.png',
    'all-white': '/images/all-white.png',
    'cream': '/images/Cream.png',
     // Image for AI image generation button
};

const styleImages = {
    'straight': '/images/phs-1.png',
    'slim': '/images/phs-2.png',
    'skinny': '/images/phs-3.png',
    'bootcut': '/images/phs-4.png',
    'classic': '/images/phs-5.png',
    'rolledup': '/images/phs-6.png',
    'zipper': '/images/phs-7.png',
    'buttons': '/images/phs-8.png',
    'class-pocket': '/images/phs-9.png',
    'work-pocket': '/images/phs-10.png',
    'unbranded': '/images/phs-11.png',
    'rounded': '/images/phs-13.png',
    'squared': '/images/phs-14.png',
};

const PhantCustomizationPage = () => {
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
                return pantImages[selectedFabric][selectedStyle];
            } else {
                return pantImages[selectedFabric]['straight'];
            }
        }
        return '';
    };

    const handleAddToCart = () => {
        const pantDetails = {
            fabric: selectedFabric,
            style: selectedStyle,
            size: selectedSize,
            quantity: quantity,
            imageUrl: getImageForSelection(),
        };

        // Navigate to the DetailsPage and pass pantDetails as state
        console.log(pantDetails);
        navigate('/phantdetails', { state: { pantDetails } });
    };

    return (
        <div className="customization-page">
            {/* Left Section: Fabric and Style Buttons */}
            <div className="selection-section">
                <div className="fabric-selection">
                    <h2>Choose Fabric</h2>
                    <div className="fabric-buttons">
                        {Object.keys(fabricImages).map((fabric) => (
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

            {/* Right Section: Pant Image Preview, Size & Quantity Selection */}
            <div className="preview-section">
                <div className="pant-preview">
                    {selectedFabric ? (
                        <img src={getImageForSelection()} alt="Pant Preview" />
                    ) : (
                        <p>Select a fabric to preview the pant.</p>
                    )}
                </div>

                {/* Size and Quantity Selection */}
                <div className="pant-options">
                    <div className="size-quantity-section">
                        <div className="size-selection">
                            <h3>Select Size</h3>
                            <div className="size-buttons">
                                {[32, 34, 38, 40, 42].map((size) => (
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

export default PhantCustomizationPage;
