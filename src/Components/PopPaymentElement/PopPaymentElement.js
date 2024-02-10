import Popup from "reactjs-popup";
import "./PopPaymentElement.scss";

export default function PopPaymentElement({ price }) {
  return (
    <Popup trigger={<button>Pay ${price} Now</button>} modal nested>
      {(close) => (
        <div className="wrapperpopup">
          <div className="topbar"></div>
          <div className="formtitle">Add a Debit or Credit Card</div>
          <form className="payment">
            <label className="payment_namelabel">Name on Card</label>
            <input className="payment_nameinput" name="name" type="text" />
            <label className="payment_addresslabel">Address</label>
            <input
              className="payment_addressinput"
              name="address"
              type="text"
            />
            <div>
              <label className="payment_citylabel">City</label>
              <input className="payment_cityinput" name="city" type="text" />
              <label className="payment_statelabel">State</label>
              <input className="payment_stateinput" name="state" type="text" />
              <label className="payment_zipcodelabel">Zipcode</label>
              <input
                className="payment_zipcodeinput"
                name="zipcode"
                type="text"
              />
            </div>

            <button className="payment_cardbutton">Add Card</button>
          </form>
        </div>
      )}
    </Popup>
  );
}
