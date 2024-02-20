import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PaymentFormStep1Page from "./Pages/PaymentFormStep1Page/PaymentFormPage1";
import PaymentFormStep2Page from "./Pages/PaymentFormStep2Page/PaymentFormPage2";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/PaymentSuccessPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orderSummary" element={<HomePage />} />
          <Route
            path="/selectpaymentoptions"
            element={<PaymentFormStep1Page />}
          />
          <Route
            path="/selectpaymentmethod"
            element={<PaymentFormStep2Page />}
          />
          <Route path="/paymentsuccess" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
