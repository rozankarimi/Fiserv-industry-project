
import React, { useState, useEffect } from 'react';
import checkoutIcon from './checkoutstageicon.png';
import confirmIcon from './comfirmstageicon.png';
import payoptionIcon from './payoptionstageicon.png';
import smallIcon from './smalIcon.png';
import './Statusbar.scss';

const StatusPaymentOption = ({ status }) => {
  const [paymentStyle, setPaymentStyle] = useState({});
  const [confirmStyle, setConfirmStyle] = useState({});
  const [checkoutStyle, setCheckoutStyle] = useState({});

  useEffect(() => {
    // Update styles based on the status
    if (status === 'payment') {
      setPaymentStyle({ fontWeight: 'bold' });
      setConfirmStyle({});
      setCheckoutStyle({});
    } else if (status === 'confirm') {
      setPaymentStyle({ fontWeight: 'bold' });
      setConfirmStyle({ fontWeight: 'bold' });
      setCheckoutStyle({});
    } else if (status === 'checkout') {
      setPaymentStyle({ fontWeight: 'bold' });
      setConfirmStyle({ fontWeight: 'bold' });
      setCheckoutStyle({ fontWeight: 'bold' });
    //   setCheckoutStyle({ fontWeight: 'bold', color: 'white' }); // Uncomment if needed
    }
  }, [status]);

  return (
    <div className="statusContainer">
      <img className="statusContainer--paymentIcon" src={smallIcon} />
      <p className="statusContainer--payment" style={paymentStyle}>
        Payment Options
      </p>
      <div className="statusContainer__line"></div>
      <img className="statusContainer--confirmIcon" src={smallIcon} />
      <p className="statusContainer--confirm" style={confirmStyle}>
        Confirm Payment
      </p>
      <div className="statusContainer__line"></div>
      <img className="statusContainer--checkoutIcon" src={smallIcon} />
      <p className="statusContainer--checkout" style={checkoutStyle}>
        Checkout
      </p>
    </div>
  );
};

export default StatusPaymentOption;