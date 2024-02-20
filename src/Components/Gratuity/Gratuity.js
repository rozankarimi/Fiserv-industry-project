import "./_Gratuity.scss";
import React from "react";
import { useState } from "react";

function Gratuity({ getGratuitycPercentage }) {
  const [gratuityTracker, setGratuityTracker] = useState(0);

  function clickHandlerButton(e) {
    e.preventDefault();
    setGratuityTracker(e.target.value);

    // i want the Gratuity Component to tell the parent component
    // the gratuiy percentage

    getGratuitycPercentage(e.target.value);
  }
import { Link } from "react-router-dom";
import { useState } from "react";

function Gratuity({
  customGratuity,
  changeGratuity,
  gratuityTotal,
  setGratuityTotal,
  handleCustomGratuity,
}) {
  const [popUpClass, setPopUpClass] = useState("display-none");
  const [showCustomInput, setShowCustomInput] = useState("");
  return (
    <div className="gratuitywrapper">
      {/* <div>{gratuityTracker}</div> */}
      <form>
        <div>
          <button onClick={clickHandlerButton} value="10">
            10%
          </button>
          <button onClick={clickHandlerButton} value="15">
            15%
          </button>
          <button onClick={clickHandlerButton} value="18">
            18%
          </button>
          <button onClick={clickHandlerButton} value="20">
            20%
          </button>
        </div>

        <label>
          Custom %<input></input>
        </label>
      </form>
    </div>
    <>
      <div className="popup_update">
        <h3>Update Gratuity</h3>
      </div>

      <div className="tipAmount">
        <div className="tipAmount__default">
          <p className="tipAmount__default--top">${gratuityTotal.toFixed(2)}</p>
        </div>

        <div className="tipwrapper">
          <p
            onClick={(event) => {
              event.preventDefault();
              changeGratuity(event);
            }}
          >
            10%
          </p>

          <p
            onClick={(event) => {
              event.preventDefault();
              changeGratuity(event);
            }}
          >
            15%
          </p>

          <p
            onClick={(event) => {
              event.preventDefault();
              changeGratuity(event);
            }}
          >
            18%
          </p>

          <p
            onClick={(event) => {
              event.preventDefault();
              changeGratuity(event);
            }}
          >
            20%
          </p>
          <p
            onClick={() => {
              setShowCustomInput("custom-input");
            }}
          >
            Custom
          </p>
        </div>
        <input
          className={`display-none ${showCustomInput}`}
          // type="number
          onChange={(event) => {
            //
            handleCustomGratuity(event);
          }}
        ></input>
      </div>

     
    </>
  );
}
export default Gratuity;
