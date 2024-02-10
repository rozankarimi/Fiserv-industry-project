import "./PopupElementStyles.scss";

export default function () {
  return (
    <div className="wrapperpopup">
      <div className="topbar"></div>
      <div className="formtitle">Add a Debit or Credit Card</div>
      <form className="payment">
        <div className="section1 am">
          <label className="section1_wnamelabel">Name on Card</label>
          <input className="section1_nameinput" name="name" type="text" />
        </div>
        <div className="section2 am">
          <label className="section2_addresslabel">Address</label>
          <input className="section2_addressinput" name="address" type="text" />
        </div>

        <div className="payment__formbottom">
          <div className="section3 am">
            <label className="payment_citylabel">City</label>
            <input className="payment_cityinput" name="city" type="text" />
          </div>
          <div className="section4 am">
            <label className="payment_statelabel">State</label>
            <input className="payment_stateinput" name="state" type="text" />
          </div>
          <div className="section5 am">
            <label className="payment_zipcodelabel">Zipcode</label>
            <input
              className="payment_zipcodeinput"
              name="zipcode"
              type="text"
            />
          </div>
        </div>
        <button className="payment_cardbutton">Add Card</button>
      </form>
    </div>
  );
}
