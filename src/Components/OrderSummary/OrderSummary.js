import "./_OrderSummary.scss";
import React from "react";
import { useState, useEffect } from "react";

function OrderSummary({ loadgratuity, setloadgratuity, reviewOrders }) {
  console.log(reviewOrders);
  const [subTotal, setSubTotal] = useState(0);

  const getSubtotal = () => {
    let totalPrice = 0;
    reviewOrders.forEach((item) => {
      totalPrice = totalPrice + item.item_total;
    });
    setSubTotal(totalPrice);
  };

  useEffect(() => {
    getSubtotal();
  }, []);

  return (
    <>
      <h3 className="header">Table Summary</h3>
      <div className="hero">
        <div className="hero__price">
          <p>Subtotal</p>
          <p>${subTotal}</p>
        </div>
        <div className="hero__price">
          <p>NYC Tax(8.875%)</p>
          <p>$13.62</p>
        </div>
        <div className="hero__price">
          <p>
            Gratuity(18%)
            <span onClick={() => setloadgratuity(true)} className="link">
              Update
            </span>
          </p>
          <p>$30.08</p>
        </div>
      </div>
      <div className="total">
        <div className="hero__price">
          <h4>Order Total</h4>
          <p>$197.20</p>
        </div>
      </div>
    </>
  );
}
export default OrderSummary;
