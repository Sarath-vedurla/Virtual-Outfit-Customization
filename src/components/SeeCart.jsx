import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import "./css/SeeCart.css";

// Define image objects
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

const pantImages = {
  'navy-blue': {
    'straight': '/images/nb.png',
    'slim': '/images/nb2.png',
    'skinny': '/images/nb3.png',
    'bootcut': '/images/nb4.png',
    'classic': '/images/nb.png',
    'rolledup': '/images/nb5.png',
    'zipper': '/images/nb6.png',
    'buttons': '/images/nb7.png',
    'class-pocket': '/images/nb8.png',
    'work-pocket': '/images/nb9.png',
    'unbranded': '/images/nb10.png',
    'class': '/images/nb11.png',
    'rounded': '/images/nb12.png',
    'squared': '/images/nb13.png',
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

// Add waist dress images
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

const SeeCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to get profile and cart details
  const fetchCartData = async () => {
    try {
      // Step 1: Fetch the user profile to get emailId
      const profileResponse = await axios.post(BASE_URL + '/profile', {}, { withCredentials: true });
      const emailId = profileResponse.data.emailId;

      // Step 2: Fetch the cart details with the emailId
      const cartResponse = await axios.post(BASE_URL + '/cart', { emailId }, { withCredentials: true });
      setCartItems(cartResponse.data); // Store the cart items in state
      setLoading(false);
    } catch (err) {
      setError('Error fetching cart data: ' + err.message);
      setLoading(false);
    }
  };

  // Use useEffect to fetch data when the page loads
  useEffect(() => {
    fetchCartData();
  }, []);

  // Function to get the product image based on type, fabric, and style
  const getProductImage = (type, fabric, style) => {
    if (type === 'shirt' && shirtImages[fabric] && shirtImages[fabric][style]) {
      return shirtImages[fabric][style];
    } else if (type === 'phants' && pantImages[fabric] && pantImages[fabric][style]) {
      return pantImages[fabric][style];
    } else if (type === 'dress' && waistDressImages[fabric] && waistDressImages[fabric][style]) {
      return waistDressImages[fabric][style];
    }
    return '/images/default.png'; // Return default image if no match found
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className='cart_heading'>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items found in cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={getProductImage(item.type, item.fabric, item.style)}
                alt={`${item.type}-${item.fabric}-${item.style}`}
                style={{ width: '200px', height: 'auto' }}
              />
              <div className="cart-details">
                <h4>{item.productName}</h4>
                <p>Type: {item.type}</p>
                <p>Fabric: {item.fabric}</p>
                <p>Style: {item.style}</p>
                <p>Price: ₹{item.new_price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeeCart;
