import "./GratuityNew.scss";
import React from "react";
import { useState } from "react";

function Gratuity({ getGratuitycPercentage }) {
  const [gratuityTracker, setGratuityTracker] = useState(0);

  function clickHandlerButton(e) {
    e.preventDefault();
    // setGratuityTracker(e.target.value);

    // i want the Gratuity Component to tell the parent component
    // the gratuiy percentage

    getGratuitycPercentage(e.target.value);
  }
  return (
    <div className="gratuitywrapper">
      {/* <div>{gratuityTracker}</div> */}
      <form className="gratuityform">
        <div className="gratuityform__top">
          <button
            className="gratuitypercentbutton"
            onClick={clickHandlerButton}
            value="10"
          >
            10%
          </button>
          <button
            className="gratuitypercentbutton"
            onClick={clickHandlerButton}
            value="15"
          >
            15%
          </button>
          <button
            className="gratuitypercentbutton"
            onClick={clickHandlerButton}
            value="18"
          >
            18%
          </button>
          <button
            className="gratuitypercentbutton"
            onClick={clickHandlerButton}
            value="20"
          >
            20%
          </button>
        </div>

        <label className="gratuityform__bottom">
          Custom %<input></input>
        </label>
      </form>
    </div>
  );
}
export default Gratuity;
