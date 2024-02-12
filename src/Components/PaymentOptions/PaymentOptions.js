import { useState, useEffect } from "react";
import "./PaymentOptionsStyles.scss";

export default function PayOptions({ amountofguest }) {
  amountofguest = 3;

  const [selection, setSelection] = useState("");

  return (
    <div className="payoptionswarp">
      {/* <div>{selection}</div> */}
      <form className="payoptionsform">
        <label class="container">
          Pay Entire Table Tab
          <input
            type="radio"
            name="radio"
            value="pay table tab"
            onChange={(e) => setSelection(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Evenly Split Payment by {amountofguest}
          <input
            checked="checked"
            type="radio"
            name="radio"
            value="even split"
            onChange={(e) => setSelection(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
        <label class="container">
          Pay by Seat
          <input
            type="radio"
            name="radio"
            value="pay seat"
            onChange={(e) => setSelection(e.target.value)}
          />
          <span class="checkmark"></span>
        </label>
      </form>
    </div>
  );
}
