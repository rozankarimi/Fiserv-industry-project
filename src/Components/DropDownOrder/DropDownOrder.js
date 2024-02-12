import "./DropDownOrder.scss";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DropDownOrder = (props) => {
  // console.log(props.customers);
  // console.log(props.reviewOrders);
  const [seats, setSeats] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const sortRevieworder = () => {
    const seats = [];
    for (let index = 0; index < props.customers.length; index++) {
      let customerId = index + 1;

      const arrayInstance = props.reviewOrders.filter((item) => {
        return item.ordering_party === customerId;
      });
      seats.push(arrayInstance);
    }

    setSeats(seats);
    setIsSorted(true);
  };

  useEffect(() => {
    sortRevieworder();
  }, []);

  if (isSorted) {
    return (
      <>
        <section className="review-orders">
          <div className="review-orders__header">
            <h2 className="review-orders__title">
              {`review order(${props.reviewOrders.length} items)`}
            </h2>
            <h2 className="review-orders__guests">{`${props.customers.length} Guests`}</h2>
          </div>
        </section>
        <article className="seats">
          {seats.map((item, index) => {
            // VARIABLE TO STORE ODERING PARTY SUBTOTAL****
            let totalPrice;
            return (
              <section className="seats__item" key={uuidv4()}>
                {/* SEAT NO  */}
                <h2 className="seats__number">{`Seat ${index + 1}`}</h2>
                {/* FOOD ITEM INFO */}
                {item.map((_item, index) => {
                  // SET ORDERING PARTY SUBTOTAL****
                  totalPrice = _item.ordering_party_subtotal;
                  return (
                    <section key={uuidv4()}>
                      <div className="food-item-info">
                        <img
                          src={_item.item_image}
                          alt={`${_item.item_name}`}
                          className="food-item-info__image"
                        />
                        <div className="food-item-info__name-quantity">
                          <h2 className="food-item-info__name-quantity--name">
                            {_item.item_name}
                          </h2>
                          <h2 className="food-item-info__name-quantity--quantity">
                            {`Qty: ${_item.order_quantity}`}
                          </h2>
                        </div>
                        <h2 className="food-item-info__price">{`$${_item.price}`}</h2>
                      </div>
                    </section>
                  );
                })}
                <p className="total-price">
                  *Taxes and Fees Not Included
                  <span className="total-price__price"> ${totalPrice}</span>
                </p>
              </section>
            );
          })}
        </article>
      </>
    );
  }
};

export default DropDownOrder;
