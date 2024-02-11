import "./PaywithButtonStyles.scss";
import Popup from "reactjs-popup";
import zelleLogo from "../../assets/images/ZelleLogoCropped.png";
import applePayLogo from "../../assets/images/applepaylogo-white.png";

export default function PayWithButton({ method, text, classplaceholder }) {
  let som;
  if (method === "Debit or Credit") {
    som = "Debit or Credit";
  } else if (method === "Zelle") {
    som = <img src={zelleLogo} alt="Zelle" />;
  } else if (method === "Apple Pay") {
    som = <img src={applePayLogo} alt="Apple Pay" />;
  }
  return (
    <Popup trigger={<button> Pay with {som}</button>} position="right center">
      <div>Popup content here !!</div>
      <div>{text}</div>
    </Popup>
  );
}
