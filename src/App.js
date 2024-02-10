import logo from "./logo.svg";
// import "./App.css";
import PayPayButton from "./Component/paypaybutton/paypaybutton";

function App() {
  return (
    <div className="App">
      <PayPayButton price={12.23} />
    </div>
  );
}

export default App;
