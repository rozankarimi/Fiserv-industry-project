import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import Ham from "./Pages/PaymentSuccessPage/PaymentSuccessPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/paymentPage" element={<PaymentPage />} />
        </Routes> */}
      </BrowserRouter>
      <Ham />
    </div>
  );
}

export default App;
