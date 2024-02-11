import "./PaywithButtonStyles.scss";
import Popup from "reactjs-popup";

export default function PayWithButton({ type, text }) {
  return (
    <Popup trigger={<button> {text}</button>} position="right center">
      <div>Popup content here !!</div>
      <div>{text}</div>
    </Popup>
  );
}
