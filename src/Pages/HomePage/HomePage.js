import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import DropDownOrder from "../../Components/DropDownOrder/DropDownOrder";
import PaymentMethodButton from "../../Components/PaymentMethodButton/PaymentMethodButton";
import { useState, useEffect } from "react";
import axios from "axios";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Gratuity from "../../Components/Gratuity/Gratuity";
const HomePage = () => {
  const [customers, setCustomers] = useState([]);
  const [reviewOrders, setReviewOrders] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loadgratuity, setloadgratuity] = useState(false);
  const [customGratuity, setCustomGratuity] = useState(0);
  const [gratuityTotal, setGratuityTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(8.875);
  const [orderTotal, setOrderTotal] = useState(0);

  const getCustomer = () => {
    axios
      .get("http://localhost:8080/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getReviewOrders = () => {
    axios
      .get("http://localhost:8080/review")
      .then((response) => {
        setReviewOrders(response.data);
      })
      .then(() => {
        getSubtotal();
        gettaxTotal();
      })
      .then(() => {
        setTimeout(() => {
          setHasLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function changeGratuity(event) {
    setCustomGratuity(event.target.innerText);
    getgratuityTotal();
  }
  const getSubtotal = () => {
    let totalPrice = 0;
    reviewOrders.forEach((item) => {
      totalPrice = totalPrice + item.item_total;
    });
    setSubTotal(totalPrice);
  };
  const gettaxTotal = () => {
    let totaltax = 0;
    totaltax = (subTotal * 8.875) / 100;
    setTaxTotal(totaltax);
    getordertotal();
  };

  const getgratuityTotal = () => {
    let totalgratuity = 0;
    totalgratuity = (subTotal * customGratuity.replace("%", " ")) / 100;
    setGratuityTotal(totalgratuity);
    getordertotal();
  };
  const getordertotal = () => {
    let orderTotalPrice = subTotal + taxTotal + gratuityTotal;
    setOrderTotal(orderTotalPrice);
  };

  useEffect(() => {
    getCustomer();
    getReviewOrders();
  }, []);

  if (hasLoaded) {
    return (
      <>
        <DropDownOrder customers={customers} reviewOrders={reviewOrders} />
        <PaymentMethodButton />
        <OrderSummary
          loadgratuity={loadgratuity}
          setloadgratuity={setloadgratuity}
          reviewOrders={reviewOrders}
          customGratuity={customGratuity}
          subTotal={subTotal}
          taxTotal={taxTotal}
          gratuityTotal={gratuityTotal}
          orderTotal={orderTotal}
        />
        {loadgratuity === true ? (
          <Gratuity
            customGratuity={customGratuity}
            changeGratuity={changeGratuity}
          />
        ) : null}
      </>
    );
  }
  if (!hasLoaded) {
    return <LoadingPage />;
  }
};
export default HomePage;
