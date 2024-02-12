import "./PaymentSuccessStyles.scss";

import checkmark from "../../assets/images/checkmark.png";
import FinalComfirmPayButton from "../../Components/GeneralButton/GeneralButton";
import FormPageTracker from "../../Components/FormPageTracker/FormPageTracker";
import Footer from "../../Components/Footer/Footer";

export default function PaymentSuccessPage() {
  return (
    <div className="paymentsucccesspage">
      <div className="paymentsucccesspage__backgrounddiv"></div>

      <div className="topsucccesspage">
        <div className="topsucccesspage__message">
          Your Payment was Succesful
        </div>
        <img className="topsucccesspagee__checkmarkimage" src={checkmark} />
        <div className="topsucccesspage__progresswrap">
          <FormPageTracker colorscheme="light" />
        </div>
      </div>

      <div className="paymentsummarywrapper"></div>

      <div className="paymentsucccesspage__bottom">
        <FinalComfirmPayButton
          text="Start Seat 2 Payment"
          buttonclass="finalcomfirmbutton"
        />
        <Footer page="success" />
      </div>
    </div>
  );
}
