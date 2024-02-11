import "./PaymentFormPage1Styles.scss";
import Footer from "../../Components/Footer/Footer";
import PayWithButton from "../../Components/PayWithButton/PayWithButton";
import ComfirmPayment from "../../Components/GeneralButton/GeneralButton";

export default function PaymentOpPay1({ seatvalue }) {
  seatvalue = 1;
  let buttontext = `Start Seat ${seatvalue} Payment`;
  return (
    <div className="formstep2">
      <div className="formstep2__header">
        <div className="headerbuttonwrap">placholder0-button</div>
      </div>
      <div className="formstep2__body">
        <div className="top">
          <div className="top__titlewrap">Payment Options</div>
          <div className="top__progresswrap">placeholder1-progressbar</div>
          <div className="top__paymentmeans">
            placeholder2-three radio buttons
          </div>
        </div>

        <div className="bottom">
          <ComfirmPayment
            text={buttontext}
            buttonclass="comfirmpaymentbutton"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
