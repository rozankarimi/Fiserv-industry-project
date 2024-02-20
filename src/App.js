import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePageNew from "./Pages/HomePageNew/HomePageNew";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PaymentFormStep1Page from "./Pages/PaymentFormStep1Page/PaymentFormPage1";
import PaymentFormStep2Page from "./Pages/PaymentFormStep2Page/PaymentFormPage2";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/PaymentSuccessPage";

import lightUIStatusBar from "./assets/images/StatusBarLight.png";
import darkUIStatusBar from "./assets/images/StatusBarDark.png";

function App() {
  const [statusBarUI, setStatusBarUI] = useState("light");
  let statusBarTheme;
  if (statusBarUI === "light") {
    statusBarTheme = lightUIStatusBar;
  } else {
    statusBarTheme = darkUIStatusBar;
  }

  function getStatusBarTheme(theme) {
    setStatusBarUI(theme);
  }

  return (
    <div className="App">
      <img className="uistatasbar" src={statusBarTheme} alt="ui status bar" />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage getStatusBarTheme={getStatusBarTheme} />}
          />
          <Route
            path="/orderSummary"
            element={<HomePageNew getStatusBarTheme={getStatusBarTheme} />}
          />
          <Route
            path="/selectpaymentoptions"
            element={
              <PaymentFormStep1Page getStatusBarTheme={getStatusBarTheme} />
            }
          />
          <Route
            path="/selectpaymentmethod"
            element={
              <PaymentFormStep2Page getStatusBarTheme={getStatusBarTheme} />
            }
          />
          <Route
            path="/paymentsuccess"
            element={
              <PaymentSuccessPage getStatusBarTheme={getStatusBarTheme} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
