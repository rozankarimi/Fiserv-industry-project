import "./HomePageNewStyles.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";

import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import DropDownOrder from "../../Components/DropDownOrder/DropDownOrder";
import PaymentMethodButton from "../../Components/PaymentMethodButton/PaymentMethodButton";
import OrderSummaryNew from "../../Components/OrderSummaryNew/OrderSummaryNew";
import GratuityNew from "../../Components/GratuityNew/GratuityNew";

export default function HomePage() {
  const [loadGratuity, setLoadGratuity] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  // const [taxedTotal, setTaxedTotal] = useState(8.875); // why not zero? by defualt?
  const [taxedTotal, setTaxedTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);

  const [gratuityTotal, setGratuityTotal] = useState(0);
  const [customGratuity, setCustomGratuity] = useState(0);

  const [customers, setCustomers] = useState([]);
  const [reviewOrders, setReviewOrders] = useState([]);

  const [finalprice, setFinalPrice] = useState(0);

  const fetchCustomerListMembers = () => {
    // this return an array of people's [cus_id, cus_name, pref_pay, e-mail]
    axios
      .get("http://localhost:8080/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCustomerOrderList = () => {
    // this return an unorder list orders
    // [order#, itme_id, item_name, price, quanity,
    // order_total, (somthing), imageURL, cus_name, group_stubtotal]
    axios
      .get("http://localhost:8080/review")
      .then((response) => {
        setReviewOrders(response.data);
        return response;
      })
      .then((response) => {
        // TOTAL PRICE (before tax)
        let totalPrice = 0;
        response.data.forEach((item) => {
          totalPrice = totalPrice + item.item_total;
        });
        // TAXED TOTAL PRICE
        let thetaxedTotal = 0;
        thetaxedTotal = (totalPrice * 8.875) / 100;

        // TOTAL ORDER PRICE
        setTaxedTotal(thetaxedTotal);
        setSubTotal(totalPrice);
        setOrderTotal(totalPrice + thetaxedTotal);
        setFinalPrice(orderTotal);
      })
      .then(() => {
        setHasLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // just for initating the population of the Order Summary component....
    fetchCustomerListMembers();
    fetchCustomerOrderList();
  }, []);

  function round2two(num) {
    let result = Math.round(num * 100) / 100;
    return result;
  }

  function getGratuityState(value) {
    console.log(value);
    setLoadGratuity(value);
  }

  function getGratuityPercentage(value) {
    // setCustomGratuity(value);
    // setGratuityTotal(subTotal * (customGratuity / 100));
    // setFinalPrice(subTotal + gratuityTotal + taxedTotal);

    console.log(value);
    setCustomGratuity(value);
    // setGratuityTotal(subTotal * value);
    console.log(customGratuity);
    // setGratuityTotal(subTotal * (Gratuity / 100));
    // we have a snap-shot related problem
    setGratuityTotal(subTotal * (value / 100));
    setFinalPrice(subTotal + subTotal * (value / 100) + taxedTotal);
  }

  if (hasLoaded) {
    return (
      <main className="homepagewrapper">
        <Header />
        <section className="homepagewrapper__inner">
          <DropDownOrder customers={customers} reviewOrders={reviewOrders} />

          <OrderSummaryNew
            getGratuityState={getGratuityState}
            customGratuityValue={customGratuity}
            subTotal={subTotal}
            taxTotal={taxedTotal}
            gratuityTotal={gratuityTotal}
            finalTotal={finalprice}
          />
          {loadGratuity === true ? (
            // the rendering of this (Gratuity) component is conditionally determined by a "button"
            // found in the OrderSummary Component

            // this component is basically a "pop-up"
            // FIXIT: you can not "unrender it" iow, close it...
            <GratuityNew getGratuitycPercentage={getGratuityPercentage} />
          ) : null}
        </section>
      </main>
    );
  }

  if (!hasLoaded) {
    return <LoadingPage />;
  }
}
