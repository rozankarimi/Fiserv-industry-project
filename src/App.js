import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/PaymentSuccessPage";
import HomePageNew from "./Pages/HomePageNew/NewHomePage";

import statusBarLight from "./assets/images/StatusBarLight.png";

import Ham from "./Components/PaymentOptions/PaymentOptions";
function App() {
  return (
    <div className="App">
      <img className="statasbar" src={statusBarLight} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orderSummary" element={<HomePageNew />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/paymentSuccessPage" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
