import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import Pay1 from "./Pages/PaymentOpPay1Page/PaymentOpPay1Page";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter> */}

      <Pay1 />
    </div>
  );
}

export default App;
