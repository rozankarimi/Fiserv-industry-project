import "./PayPopUpMessageStyles.scss";
import ComfirmPayment from "../GeneralButton/GeneralButton";
export default function PayPopUpMessage({ paymentmethod }) {
  return (
    <div className="messagewrapper">
      <div className="methodtitle">Work In Progress</div>
      <form className="paymentpopupform">
        <label>Work In Progress</label>
        <input></input>
      </form>
      <ComfirmPayment text="Comfirm" buttonclass="popupcomfirmbutton" />
    </div>
  );
}
