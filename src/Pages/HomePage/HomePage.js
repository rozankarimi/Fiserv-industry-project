import "./HomePageStyles.scss";

import LoadingPage from "../../Components/LoadingPage/LoadingPage";
import DropDownOrder from "../../Components/DropDownOrder/DropDownOrder";
import { useState, useEffect } from "react";
import axios from "axios";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import Gratuity from "../../Components/Gratuity/Gratuity";
import Header from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [customers, setCustomers] = useState([]);
  const [reviewOrders, setReviewOrders] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loadgratuity, setloadgratuity] = useState(false);
  const [customGratuity, setCustomGratuity] = useState("0");
  const [gratuityTotal, setGratuityTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [taxTotal, setTaxTotal] = useState(8.875);
  const [orderTotal, setOrderTotal] = useState(0);

  const navigate = useNavigate();

  function changeGratuity(event) {
    const eventValue = event.target.innerText;
    setCustomGratuity(eventValue);
  }

  const getGratuityTotal = () => {
    let totalgratuity = 0;
    const currentGratuity = customGratuity.includes("%")
      ? customGratuity.replace("%", " ")
      : customGratuity;
    totalgratuity = (subTotal * Number(currentGratuity)) / 100;
    setGratuityTotal(totalgratuity);
    getOrdertotal();
  };

  const getOrdertotal = () => {
    setOrderTotal(subTotal + taxTotal + gratuityTotal);
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
        return response;
      })
      .then((response) => {
        // TOTAL PRICE
        let totalPrice = 0;
        response.data.forEach((item) => {
          totalPrice = totalPrice + item.item_total;
        });
        // TAX TOTAL
        let totalTax = 0;
        totalTax = (totalPrice * 8.875) / 100;

        // TOTAL ORDER
        setTaxTotal(totalTax);
        setSubTotal(totalPrice);
        setOrderTotal(totalPrice + totalTax + gratuityTotal);
      })
      .then(() => {
        setHasLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCustomer();
    getReviewOrders();
  }, []);

  useEffect(() => {
    getGratuityTotal();
    getOrdertotal();
  }, [customGratuity, subTotal, taxTotal, gratuityTotal]);

  function homePageButtonHandler() {}
  if (hasLoaded) {
    return (
      <main className="homepagewrapper">
        <Header />
        <section className="homepagewrapper__inner">
          <DropDownOrder customers={customers} reviewOrders={reviewOrders} />
          <OrderSummary
            loadgratuity={loadgratuity}
            setloadgratuity={setloadgratuity}
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
              gratuityTotal={gratuityTotal}
            />
          ) : null}
          <button
            type="text"
            className="buttonBoxwrapper"
            onClick={() => navigate("/selectpaymentoptions")}
          >
            Continue to Payment Options
          </button>
        </section>
      </main>
    );
  }

  if (!hasLoaded) {
    return <LoadingPage />;
  }
}
