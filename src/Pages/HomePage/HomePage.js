import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import DropDownOrder from "../../Components/DropDownOrder/DropDownOrder";
import PaymentMethodButton from "../../Components/PaymentMethodButton/PaymentMethodButton";
import { useState } from "react";
const HomePage = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  setTimeout(() => {
    setHasLoaded(true);
  }, 3000);
  if (hasLoaded) {
    return (
      <>
        <PaymentMethodButton />
        <DropDownOrder />
      </>
    );
  }
  if (!hasLoaded) {
    return <LoadingPage />;
  }
};
export default HomePage;
