import "./_paypaybutton_styles.scss";

export default function PayPayButton() {
  function payButtonHandler() {}
  return (
    <button onclick={payButtonHandler} className="paypaybutton">
      pay
    </button>
  );
}
