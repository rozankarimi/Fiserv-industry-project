import "./_OrderSummary.scss";
import React from "react";
import { useState, useEffect } from "react";

function OrderSummary({
  loadgratuity,
  setloadgratuity,
  reviewOrders,
  customGratuity,
  gratuityTotal,
  subTotal,
  taxTotal,
  orderTotal,
}) {
  console.log(reviewOrders);

  return (
    <>
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
            Gratuity({customGratuity})
            <span onClick={() => setloadgratuity(true)} className="link">
              Update
            </span>
          </p>
          <p>${gratuityTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="total">
        <div className="hero__price">
          <h4>Order Total</h4>
          <p>${orderTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
export default OrderSummary;
