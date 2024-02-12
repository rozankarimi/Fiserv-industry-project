import "./_Gratuity.scss";
import React from "react";
import { useState } from "react";

function Gratuity({
  customGratuity,
  changeGratuity,
  getUserGratuityValueFunc,
}) {
  const [aaa, setaaa] = useState(0);

  function clickHandlerButton(e) {
    e.preventDefault();
    setaaa(e.target.value);
    getUserGratuityValueFunc(e.target.value);
  }
  return (
    <div className="gratuitywrapper">
      <div>{aaa}</div>
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

        <label for="">
          Custom %<input></input>
        </label>
      </form>
    </div>
  );
}
export default Gratuity;
