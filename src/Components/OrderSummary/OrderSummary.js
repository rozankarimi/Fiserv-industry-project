import "./_OrderSummary.scss";
import React, { useState } from "react";

function OrderSummary({
  getGratuityState,
  subTotal,
  taxTotal,
  finalTotal,
  gratuityTotal,
  customGratuityValue,
}) {
  const [displayPercentage, setDisplayPercentage] = useState(false);

  function displayPercentageState() {
    setDisplayPercentage(!displayPercentage);
    getGratuityState(!displayPercentage);
  }

  return (
    <section className="tablesummarywrapper">
      <h3 className="header">Table Summary</h3>
      <div className="hero">
        <div className="hero__price">
          <p>Subtotal</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
        <div className="hero__price">
          <p>NYC Tax(8.875%)</p>
          <p>${taxTotal.toFixed(2)}</p>
        </div>
        <div className="hero__price">
          <p>
            Gratuity({customGratuityValue}%)
            <button
              onClick={displayPercentageState}
              className="gratuityvisibilitybutton"
            >
              {displayPercentage ? "hide" : "edit"}
            </button>
          </p>
          <p>${gratuityTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="total">
        <div className="hero__price">
          <h4>Order Total</h4>
          <p>${finalTotal.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
}
export default OrderSummary;
