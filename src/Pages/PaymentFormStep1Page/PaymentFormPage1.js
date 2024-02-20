import "./PaymentFormPage1Styles.scss";

import PaymentOptions from "../../Components/PaymentOptions/PaymentOptions";
import GeneralNavigationButton from "../../Components/GeneralNavigationButton/GeneralNavigationButton";
import DynamicGoBack from "../../Components/DynamicGoBack/DynamicGoBack";
import FormPageTracker from "../../Components/FormPageTracker/FormPageTracker";
import Footer from "../../Components/Footer/Footer";

export default function PaymentOpPay1({ seatvalue }) {
  seatvalue = 1;
  let buttontext = `Start Seat ${seatvalue} Payment`;
  return (
    <div className="formstep2">
      <div className="formstep2__header">
        <div className="headerbuttonwrap">
          <DynamicGoBack content="Back to Table Summary" />
        </div>
      </div>
      <div className="formstep2__body">
        <div className="toppage1">
          <div className="toppage1__titlewrap">Payment Options</div>
          <div className="toppage1__progresswrap">
            <FormPageTracker />
          </div>
          <div className="toppage1__paymentoptions">
            <PaymentOptions />
          </div>
        </div>

        <div className="bottompage1">
          <GeneralNavigationButton
            text={buttontext}
            buttonclass="comfirmpaymentbutton"
            theroute="/selectpaymentmethod"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
