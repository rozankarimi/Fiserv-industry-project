import "./PaymentFormPage2Styles.scss";
import Footer from "../../Components/Footer/Footer";
import PayWithButton from "../../Components/PayWithButton/PayWithButton";
import ComfirmPayment from "../../Components/GeneralButton/GeneralButton";
import FormPageTracker from "../../Components/FormPageTracker/FormPageTracker";
import DynamicGoBack from "../../Components/DynamicGoBack/DynamicGoBack";

export default function PaymentOpPay1({ payMethod, price, seatvalue }) {
  payMethod = "Seat";
  price = 39.82;
  seatvalue = 1;

  return (
    <div className="formstep2">
      <div className="formstep2__header">
        <div className="headerbuttonwrap">
          <DynamicGoBack content="Back to Payment Options" />
        </div>
      </div>
      <div className="formstep2__body">
        <div className="toppage2">
          {/* <div className="top__titlewrap">Pay by {payMethod}</div> */}
          <div className="toppage2__titlewrap">Split Payment</div>
          <div className="toppage2__progresswrap">
            <FormPageTracker colorscheme="dark" />
          </div>
          <div className="toppage2__pricewrap">${price}</div>
          <div className="toppage2__messagewrap">
            For Uni Sushi - Seat {seatvalue}
          </div>
          <div className="middlepage2">
            <PayWithButton method="Debit or Credit" text="some" />
            <PayWithButton method="Zelle" text="somehum" />
            <PayWithButton method="Apple Pay" text="somehumbum" />
          </div>
        </div>

        <div className="bottomtoppage2">
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
