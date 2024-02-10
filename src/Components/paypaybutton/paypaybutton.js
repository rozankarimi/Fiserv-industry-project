import "./_paypaybutton_styles.scss";

export default function PayPayButton({ price }) {
  function payButtonHandler() {}
  return (
    <button onclick={payButtonHandler} className="paybutton">
      Pay ${price} Now
    </button>
  );
}
