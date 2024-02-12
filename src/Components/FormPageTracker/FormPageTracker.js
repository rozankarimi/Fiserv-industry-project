import "./FormPageTrackerStyles.scss";

import React, { useState, useEffect } from "react";
import checkoutIcon from "../../assets/images/checkoutstageicon.png";
import confirmIcon from "../../assets/images/comfirmstageicon.png";
import payoptionIcon from "../../assets/images/payoptionstageicon.png";
import smallIcon from "../../assets/images/add_card.png";

const StatusPaymentOption = ({ status }) => {
  const [paymentStyle, setPaymentStyle] = useState({});
  const [confirmStyle, setConfirmStyle] = useState({});
  const [checkoutStyle, setCheckoutStyle] = useState({});

  useEffect(() => {
    // Update styles based on the status
    if (status === "payment") {
      setPaymentStyle({ fontWeight: "bold" });
      setConfirmStyle({});
      setCheckoutStyle({});
    } else if (status === "confirm") {
      setPaymentStyle({ fontWeight: "bold" });
      setConfirmStyle({ fontWeight: "bold" });
      setCheckoutStyle({});
    } else if (status === "checkout") {
      setPaymentStyle({ fontWeight: "bold" });
      setConfirmStyle({ fontWeight: "bold" });
      setCheckoutStyle({ fontWeight: "bold" });
      //   setCheckoutStyle({ fontWeight: 'bold', color: 'white' }); // Uncomment if needed
    }
  }, [status]);

  return (
    <div className="statusContainer">
      <img className="statusContainer--paymentIcon" src={smallIcon} />
      <p className="statusContainer--paymenttext" style={paymentStyle}>
        Payment Options
      </p>
      <div className="statusContainer__line"></div>
      <img className="statusContainer--confirmIcon" src={smallIcon} />
      <p className="statusContainer--confirmtext" style={confirmStyle}>
        Confirm Payment
      </p>
      <div className="statusContainer__line"></div>
      <img className="statusContainer--checkoutIcon" src={smallIcon} />
      <p className="statusContainer--checkouttext" style={checkoutStyle}>
        Checkout
      </p>
    </div>
  );
};

export default StatusPaymentOption;
