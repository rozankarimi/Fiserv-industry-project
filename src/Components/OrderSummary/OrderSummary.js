import "./_OrderSummary.scss";
import React from "react";

function OrderSummary() {
  return (
    <>
      <div className="hero">
        <h3>Table Summary</h3>
        <p>Subtotal</p>
        <p>NYC Tax(8.875%)</p>
        <p>
          Gratuity(18%)
          <a href="/" className="link">
            Update
          </a>
        </p>
      </div>
      <div className="total">
        <h3>Order Total</h3>
      </div>
      <div>
        <label htmlFor="accept">
          <input
            type="checkbox"
            id="accept"
            name="accept"
            className="checkbox"
          />
          Apply Coupon or gift card
        </label>
      </div>
    </>
  );
}
export default OrderSummary;
