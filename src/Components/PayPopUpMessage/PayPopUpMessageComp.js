import "./PayPopUpMessageStyles.scss";
import ComfirmPayment from "../GeneralButton/GeneralButton";
export default function PayPopUpMessage({ paymentmethod }) {
  return (
    <div className="messagewrapper">
      <div className="methodtitle">{paymentmethod}</div>
      <form className="paymentpopupform">
        <label>placeholder</label>
        <input></input>
      </form>
      <ComfirmPayment text="Comfirm" buttonclass="popupcomfirmbutton" />
    </div>
  );
}
