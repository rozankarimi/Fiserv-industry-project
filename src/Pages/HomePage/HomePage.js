import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import DropDownOrder from "../../Components/DropDownOrder/DropDownOrder";
import PaymentMethodButton from "../../Components/PaymentMethodButton/PaymentMethodButton";
import { useState } from "react";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Gratuity from "../../Components/Gratuity/Gratuity";
const HomePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loadgratuity, setloadgratuity] = useState(false);

  setTimeout(() => {
    setHasLoaded(true);
  }, 3000);
  if (hasLoaded) {
    return (
      <>
        <PaymentMethodButton />
        <DropDownOrder />
        <OrderSummary
          loadgratuity={loadgratuity}
          setloadgratuity={setloadgratuity}
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
