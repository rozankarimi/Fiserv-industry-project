import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/PaymentSuccessPage";
import Some from "./Components/GeneralPaymentFormPageComp/GeneralPaymentFormPage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/paymentSuccessPage" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter> */}
      <Some />
    </div>
  );
}

export default App;
