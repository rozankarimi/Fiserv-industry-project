import "./GeneralPaymentFormPageStyles.scss";
import Footer from "../Footer/Footer";
import MethodPayButton from "../PayWithButton/PayWithButton";
import ComfirmPayment from "../GeneralButton/GeneralButton";

export default function PaymentOpPay1({ payMethod, price, seatvalue }) {
  return (
    <>
      <div className="top">
        <div className="headerbuttonwrap">placholder0-button</div>
        <div className="titlewrap">{payMethod}</div>
        <div className="progresswrap">placeholder1-progressbar</div>
        <div className="pricewrap">{price}</div>
        <div className="messagewrap">For Uni Suchi - Seat {seatvalue}</div>
      </div>
      <div className="middlecomp">placeholder2-mainbody comp</div>
      <div className="bottom">
        <MethodPayButton method="Debit or Credit" text="some" s />
        <MethodPayButton method="Zelle" text="somehum" />
        <MethodPayButton method="Apple Pay" text="somehumbum" />
        <ComfirmPayment
          text="Confirm Payment"
          buttonclass="comfirmpaymentbutton"
        />
      </div>
      <Footer />
    </>
  );
}
