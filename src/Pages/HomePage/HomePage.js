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

  const handleSplit = () => {};
  const sortOrders = () => {
    // const sortArray = arraySort(orders, "ordering_party");
  };

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
        setTimeout(() => {
          setHasLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <OrderSummary />
        <Gratuity />
      </>
    );
  }
  if (!hasLoaded) {
    return <LoadingPage />;
  }
};
export default HomePage;
