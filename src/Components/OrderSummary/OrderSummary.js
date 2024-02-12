import "./_OrderSummary.scss";
import React from "react";

function OrderSummary({
  gratuityStateFunc,
  subTotal,
  taxTotal,
  finalTotal,
  gratuityTotal,
  customGratuityValue,
}) {
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
            <span onClick={() => gratuityStateFunc(true)} className="link">
              Update
            </span>
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
