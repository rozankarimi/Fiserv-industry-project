import "./PaywithButtonStyles.scss";
import Popup from "reactjs-popup";
import zelleLogo from "../../assets/images/zellelogocropped.png";
import applePayLogo from "../../assets/images/applepaylogo-white.png";

export default function PayWithButton({ method, text, classplaceholder }) {
  let som;
  if (method === "Debit or Credit") {
    som = "Debit or Credit";
  } else if (method === "Zelle") {
    som = <img src={zelleLogo} className="payicon1" alt="Zelle" />;
  } else if (method === "Apple Pay") {
    som = <img src={applePayLogo} className="payicon2" alt="Apple Pay" />;
  }
  return (
    <Popup
      trigger={
        <button className="paywithbuttomcomp">
          <div className="child1">Pay with</div>
          <div className="child2">{som}</div>
        </button>
      }
    >
      <div>Popup content here !!</div>
      <div>{text}</div>
    </Popup>
  );
}
