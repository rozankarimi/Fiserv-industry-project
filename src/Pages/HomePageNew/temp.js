// const [customers, setCustomers] = useState([]);
// const [reviewOrders, setReviewOrders] = useState([]);
// const [hasLoaded, setHasLoaded] = useState(false);
// const [loadgratuity, setloadgratuity] = useState(false);
// const [customGratuity, setCustomGratuity] = useState("0");
// const [gratuityTotal, setGratuityTotal] = useState(0);
// const [subTotal, setSubTotal] = useState(0);
// const [taxTotal, setTaxTotal] = useState(8.875);
// const [orderTotal, setOrderTotal] = useState(0);

const getOrdertotal = () => {
  setOrderTotal(subTotal + taxTotal + gratuityTotal);
};

const fetchCustomerListMembers = () => {
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

/*
what we have after calls

-customer list 
[cus_id, cus_name, pref_pay, e-mail]\


-entire order list of the table
  [order#, itme_id, item_name, price, quanity, 
    order_total, (somthing), imageURL, cus_name, group_stubtotal]



subTotal
taxedTotal
orderTotal
*/
