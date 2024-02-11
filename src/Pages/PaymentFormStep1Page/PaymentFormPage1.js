import "./PaymentFormPage1Styles.scss";
import Footer from "../../Components/Footer/Footer";
import PayWithButton from "../../Components/PayWithButton/PayWithButton";
import ComfirmPayment from "../../Components/GeneralButton/GeneralButton";

export default function PaymentOpPay1({ seatvalue }) {
  payMethod = "Seat";
  price = 39.82;
  seatvalue = 1;

  return (
    <div className="formstep2">
      <div className="formstep2__header">
        <div className="headerbuttonwrap">placholder0-button</div>
      </div>
      <div className="formstep2__body">
        <div className="top"></div>

        <div className="bottom">
          <ComfirmPayment text="start" buttonclass="comfirmpaymentbutton" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
