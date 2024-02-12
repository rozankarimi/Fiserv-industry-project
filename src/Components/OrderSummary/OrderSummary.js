import "./_OrderSummary.scss";
import React from "react";

function OrderSummary(props) {
  return (
    <>
      <h3 className="header">Table Summary</h3>
      <div className="hero">
        <div className="hero__price">
          <p>Subtotal</p>
          <p>${props.subTotal.toFixed(2)}</p>
        </div>
        <div className="hero__price">
          <p>NYC Tax(8.875%)</p>
          <p>${props.taxTotal.toFixed(2)}</p>
        </div>
        <div className="hero__price">
          <p>
            Gratuity({props.customGratuity})
            <span onClick={() => props.setloadgratuity(true)} className="link">
              Update
            </span>
          </p>
          <p>${props.gratuityTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="total">
        <div className="hero__price">
          <h4>Order Total</h4>
          <p>${props.orderTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
export default OrderSummary;
