import { useState, useEffect } from "react";

import "./PaywithButtonStyles.scss";
import Popup from "reactjs-popup";
import zelleLogo from "../../assets/images/zellelogocropped.png";
import applePayLogo from "../../assets/images/applepaylogo-white.png";
import PayPopUpMessageComp from "../PayPopUpMessage/PayPopUpMessageComp";

export default function PayWithButton({ method, text, classplaceholder }) {
  const [statusLight, setStatusLight] = useState(<div></div>);
  const [validation, setValidation] = useState(false);

  let som;
  if (method === "Debit or Credit") {
    som = "Debit or Credit";
  } else if (method === "Zelle") {
    som = <img src={zelleLogo} className="payicon1" alt="Zelle" />;
  } else if (method === "Apple Pay") {
    som = <img src={applePayLogo} className="payicon2" alt="Apple Pay" />;
  }

  useEffect(() => {
    if (validation) {
      setStatusLight(<div className="statuscircle"></div>);
    }
  });
  return (
    <Popup
      trigger={
        <button className="paywithbuttomcomp">
          <div className="child1">Pay with</div>
          <div className="child2">{som}</div>
          {statusLight}
        </button>
      }
    >
      <PayPopUpMessageComp paymentmethod="soemhtogn" />
    </Popup>
  );
}
