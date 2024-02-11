import { useState } from "react";
import "./PaymentMethodButton.scss";
import appleLogo from "../../assets/images/applepaylogo-black.svg";
const PaymentMethodButton = () => {
  const [selectCreditCard, setSelectCreditCard] = useState(true);
  const [selectApplePay, setSelectApplePay] = useState(false);
  const handleCreditCard = () => {
    setSelectCreditCard(true);
    setSelectApplePay(false);
  };
  const handleApplePay = () => {
    setSelectApplePay(true);
    setSelectCreditCard(false);
  };
  return (
    <>
      <h2 className="payment-method-header">Payment Method</h2>
      <section className="buttons">
        <div className="buttons__button-container">
          <span
            className={`buttons__button-container--button ${
              selectCreditCard ? "selected-payment-method" : ""
            }`}
            onClick={(event) => {
              event.stopPropagation();
              handleCreditCard();
            }}
          ></span>
          <p className="buttons__button-container--text"> Pay with card</p>
        </div>
        <div className="buttons__button-container">
          <span
            className={`buttons__button-container--button ${
              selectApplePay ? "selected-payment-method" : ""
            }`}
            onClick={(event) => {
              event.stopPropagation();
              handleApplePay();
            }}
          ></span>
          <p className="buttons__button-container--text apple-pay-container">
            <span>Pay with</span>{" "}
            <img
              src={appleLogo}
              alt="apple-pay-logo"
              className="apple-pay-logo"
            />
          </p>
        </div>
      </section>
    </>
  );
};
export default PaymentMethodButton;
