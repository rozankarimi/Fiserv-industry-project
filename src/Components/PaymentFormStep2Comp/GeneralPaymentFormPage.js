import "./GeneralPaymentFormPageStyles.scss";
import Footer from "../Footer/Footer";
import MethodPayButton from "../PayWithButton/PayWithButton";
import ComfirmPayment from "../GeneralButton/GeneralButton";

export default function PaymentOpPay1({ payMethod, price, seatvalue }) {
  payMethod = "Seat";
  price = 39.82;
  seatvalue = 1;
  return (
    <div className="formstep2">
      <div className="formstep2__header">
        <div className="headerbuttonwrap">placholder0-button</div>
      </div>
      <div className="formstep2__body">
        <div className="top">
          <div className="titlewrap">Pay by {payMethod}</div>
          <div className="progresswrap">placeholder1-progressbar</div>
          <div className="pricewrap">${price}</div>
          <div className="messagewrap">For Uni Suchi - Seat {seatvalue}</div>
        </div>
        <div className="middle">
          <MethodPayButton method="Debit or Credit" text="some" s />
          <MethodPayButton method="Zelle" text="somehum" />
          <MethodPayButton method="Apple Pay" text="somehumbum" />
        </div>
        <div className="bottom">
          <ComfirmPayment
            text="Confirm Payment"
            buttonclass="comfirmpaymentbutton"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
