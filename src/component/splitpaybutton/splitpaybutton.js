import "./_splitpaybutton_styles.scss";
export default function SplitPayButton() {
  function splitButtonHandler() {}
  return (
    <button onclick={splitButtonHandler} className="splitbutton">
      split check
    </button>
  );
}
