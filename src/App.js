import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import LandingPage from "./Pages/LandingPage/LandingPage";  
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/PaymentSuccessPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/orderSummary" element={<HomePage />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
          <Route path="/paymentSuccessPage" element={<PaymentSuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
