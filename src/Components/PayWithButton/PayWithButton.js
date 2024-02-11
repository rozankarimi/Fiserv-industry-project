import "./PayWithButtonStyles.scss";
import Popup from "reactjs-popup";

export default function PayWithButton({ type, text }) {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );
}
