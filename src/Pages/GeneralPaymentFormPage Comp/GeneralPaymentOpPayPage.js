import "./GeneralPaymentOpPayPageStyles.scss";

export default function PaymentOpPay1({ payMethod, price, seatvalue }) {
  return (
    <>
      <div className="top">
        <div className="headerbuttonwrap">placholder0-button</div>
        <div className="titlewrap">{payMethod}</div>
        <div className="progresswrap">placeholder1-progressbar</div>
        <div className="pricewrap">{price}</div>
        <div className="messagewrap">For Uni Suchi - Seat {seatvalue}</div>
      </div>
      <div className="middlecomp">placeholder2-mainbody comp</div>
      <div className="bottom">placeholder3-buttons comp</div>
      {/* here goes footer */}
    </>
  );
}
