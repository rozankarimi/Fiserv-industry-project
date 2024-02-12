import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/PaymentSuccessPage";
import PaymentFormStep1Page from "./Pages/PaymentFormStep1Page/PaymentFormPage1";
import PaymentFormStep2Page from "./Pages/PaymentFormStep2Page/PaymentFormPage2";
import TheForm from "./Components/FormPageTracker/FormPageTracker";

import statusBarLight from "./assets/images/StatusBarLight.png";
function App() {
  return (
    <div className="App">
      <img className="statasbar" src={statusBarLight} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orderSummary" element={<HomePage />} />
          <Route
            path="/paymentSuccessPage"
            element={<PaymentFormStep1Page />}
          />
          <Route
            path="/paymentSuccessPage"
            element={<PaymentFormStep2Page />}
          />
          <Route path="/paymentSuccessPage" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>

      {/* <PaymentSuccessPage /> */}
      {/* <PaymentFormStep2Page /> */}
    </div>
  );
}

export default App;
