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

  setTimeout(() => {
    setHasLoaded(true);
  }, 3000);
  if (hasLoaded) {
    return (
      <>
        <DropDownOrder customers={customers} reviewOrders={reviewOrders} />
        <PaymentMethodButton />
        <OrderSummary
          loadgratuity={loadgratuity}
          setloadgratuity={setloadgratuity} 
          reviewOrders={reviewOrders}
        />
        {loadgratuity === true ? <Gratuity /> : null}
      </>
    );
  }
  if (!hasLoaded) {
    return <LoadingPage />;
  }
};
export default HomePage;
