import "./FormPageTrackerStyles.scss";

import React, { useState, useEffect } from "react";
import checkoutIcon from "../../assets/images/checkoutstageicon.png";
import confirmIcon from "../../assets/images/comfirmstageicon.png";
import payoptionIcon from "../../assets/images/payoptionstageicon.png";
import icondark from "../../assets/images/add_card.png";
import iconlight from "../../assets/images/add_card_white.png";

const StatusPaymentOption = ({ status, colorscheme }) => {
  const [paymentStyle, setPaymentStyle] = useState({});
  const [confirmStyle, setConfirmStyle] = useState({});
  const [checkoutStyle, setCheckoutStyle] = useState({});
  const [lineStyle, setLineStyle] = useState({});
  let icontheme;
  if (colorscheme === "light") {
    icontheme = iconlight;
  } else icontheme = icondark;

  useEffect(() => {
    if (colorscheme === "light") {
      icontheme = iconlight;
      setPaymentStyle({ color: "white" });
      setConfirmStyle({ color: "white" });
      setCheckoutStyle({ color: "white" });
      setLineStyle({ border: "1px solid white" });
    } else {
      setPaymentStyle({ color: "black" });
      setConfirmStyle({ color: "black" });
      setCheckoutStyle({ color: "black" });
      setLineStyle({ border: "1px solid black" });
    }
    // // Update styles based on the status
    // if (status === "payment") {
    //   setPaymentStyle({ fontWeight: "bold" });
    //   setConfirmStyle({});
    //   setCheckoutStyle({});
    // } else if (status === "confirm") {
    //   setPaymentStyle({ fontWeight: "bold" });
    //   setConfirmStyle({ fontWeight: "bold" });
    //   setCheckoutStyle({});
    // } else if (status === "checkout") {
    //   setPaymentStyle({ fontWeight: "bold" });
    //   setConfirmStyle({ fontWeight: "bold" });
    //   setCheckoutStyle({ fontWeight: "bold" });
    //   //   setCheckoutStyle({ fontWeight: 'bold', color: 'white' }); // Uncomment if needed
    // }
  }, [status]);

  return (
    <div className="statusContainer">
      <img className="statusContainer--paymentIcon" src={icontheme} />
      <p className="statusContainer--paymenttext" style={paymentStyle}>
        Payment Options
      </p>
      <div className="statusContainer__line" style={lineStyle}></div>
      <img className="statusContainer--confirmIcon" src={icontheme} />
      <p className="statusContainer--confirmtext" style={confirmStyle}>
        Confirm Payment
      </p>
      <div className="statusContainer__line" style={lineStyle}></div>
      <img className="statusContainer--checkoutIcon" src={icontheme} />
      <p className="statusContainer--checkouttext" style={checkoutStyle}>
        Checkout
      </p>
    </div>
  );
};

export default StatusPaymentOption;
