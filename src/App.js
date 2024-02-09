import logo from "./logo.svg";
// import "./App.css";
import SplitPayButton from "./component/splitpaybutton/splitpaybutton";
import PayPayButton from "./component/paypaybutton/paypaybutton";
import SeatPayButton from "./component/seatpaybutton/seatpaybutton";

function App() {
  return (
    <div className="App">
      <SplitPayButton />
      <PayPayButton />
      <SeatPayButton />
    </div>
  );
}

export default App;
