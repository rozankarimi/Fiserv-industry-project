import "./PaymentFormPage1Styles.scss";
import PaymentOptions from "../../Components/PaymentOptions/PaymentOptions";
import ComfirmPayment from "../../Components/GeneralButton/GeneralButton";
import Footer from "../../Components/Footer/Footer";

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
          <div className="top__paymentoptions">
            <PaymentOptions />
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
