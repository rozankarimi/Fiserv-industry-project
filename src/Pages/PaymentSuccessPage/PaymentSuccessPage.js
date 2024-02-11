import "./PaymentSuccessStyles.scss";
import checkmark from "../../assets/images/checkmark.png";
import FinalComfirmPayButton from "../../Components/GeneralButton/GeneralButton";
import TableSummary from "../../Components/OrderSummary/OrderSummary";

export default function PaymentSuccessPage() {
  return (
    <div className="paymentsucccesspage">
      <div className="paymentsucccesspage__backgrounddiv"></div>
      <img className="paymentsucccesspage__checkmarkimage" src={checkmark} />
      <div className="paymentsucccesspage__message">
        Your Payment was Succesful
      </div>
      <div className="paymentsummarywrapper">
        <TableSummary />
      </div>
      <FinalComfirmPayButton
        text="Comfirm Split Payments"
        buttonclass="finalcomfirmbutton"
      />
    </div>
  );
}
