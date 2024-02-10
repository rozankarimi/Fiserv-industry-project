// import logo from "./logo.svg";
import "./appstyles.scss";
import DropDownOrder from "./Components/DropDownOrder/DropDownOrder";
import LoadingPage from "./Components/LoadingPage/LoadingPage";
import Ham from "./Components/PopPaybutton/PopPaybutton";
function App() {
  return (
    <div className="App">
      {/* <div className="some">sdfsdf</div> */}
      <Ham price={2312} />
    </div>
  );
}

export default App;
