import Popup from "reactjs-popup";
import "./PopPaybuttonStyles.scss";
import PopupElement from "../PopupElement/PopupElement";

export default function PopPaymentElement({ price }) {
  return (
    <Popup
      trigger={<button className="paybutton">Pay ${price} Now</button>}
      modal
      nested
    >
      {(close) => <PopupElement />}
    </Popup>
  );
}
