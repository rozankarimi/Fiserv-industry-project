import "./_Gratuity.scss";
import React from "react";

function Gratuity({ customGratuity, changeGratuity }) {
  return (
    <>
      <div className="popup_update">
        <h3>Update Gratuity</h3>
      </div>
      <div className="tipAmount">
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
        <div className="tipAmount__default">
          {/* <p className="tipAmount__default--top">$30.08</p> */}
          <p
            onClick={(event) => {
              event.preventDefault();
              changeGratuity(event);
            }}
            className="tipAmount__default--buttom"
          >
            18%
          </p>
        </div>
        <p
          onClick={(event) => {
            event.preventDefault();
            changeGratuity(event);
          }}
        >
          20%
        </p>
        <p>Custom</p>
      </div>
      <div className="buttonBox">
        <button type="text" className="button">
          {" "}
          Confirm 18% ($30.08){" "}
        </button>
      </div>
    </>
  );
}
export default Gratuity;
