import "./_seatpaybutton_styles.scss";

export default function seatpaybutton() {
  function seatpayButtonHandler() {}
  return (
    <button onclick={seatpayButtonHandler} className="seatpaybutton">
      pay by seat
    </button>
  );
}
