import "./_Gratuity.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Gratuity({ customGratuity, changeGratuity, gratuityTotal }) {
  const [popUpClass, setPopUpClass] = useState("display-none");
  return (
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

          <p>Custom</p>
        </div>
      </div>

      {/* <Link to="/paymentPage">
        <div className="buttonBox">
          <button
            type="text"
            className="button"
            onClick={() => {
              setPopUpClass("");
            }}
          >
            Confirm {customGratuity} ($ {gratuityTotal.toFixed(2)})
          </button>
        </div>
      </Link> */}
    </>
  );
}
export default Gratuity;
