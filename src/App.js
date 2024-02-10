import logo from "./logo.svg";
import "./App.css";
// import DropDownOrder from "./Components/DropDownOrder/DropDownOrder";
// import LoadingPage from "./Components/LoadingPage/LoadingPage";
import PaymentMethodButton from "./Components/PaymentMethodButton/PaymentMethodButton";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Dahaha price={12.12} />
    </div>
  );
}

export default App;
