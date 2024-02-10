import "./DropDownOrder.scss";
import { useState } from "react";
import dropDownButton from "../../assets/images/bxs_up-arrow.svg";
const DropDownOrder = (props) => {
  const { currentSeat, setCurrentSit } = useState(1);
  const [totalItem, setTotalItems] = useState(5);
  const [totalSeats, setTotalSeats] = useState([
    [
      {
        id: 1,
        name: "Sashimi",
        img_src:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/types-of-sushi-sashimi.jpg?fit=728%2C524",
        quantity: 2,
        price: "18.00",
      },
      {
        id: 2,
        name: "Nigiri",
        img_src:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/types-of-sushi-maki.jpg?fit=728%2C524",
        quantity: 1,
        price: "18.00",
      },
    ],
    [
      {
        id: 3,
        name: "Maki",
        img_src:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/types-of-sushi-uramaki.jpg?fit=680%2C489",
        quantity: 2,
        price: "18.00",
      },
      {
        id: 4,
        name: "Uramaki",
        img_src:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/types-of-sushi-temaki.jpg?fit=680%2C489",
        quantity: 4,
        price: "18.00",
      },
    ],
    [
      {
        id: 5,
        name: "Temaki",
        img_src:
          "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/types-of-sushi-gunkan.jpg?fit=728%2C524",
        quantity: 2,
        price: "18.00",
      },
    ],
  ]);
  const [seatClass, setSeatClass] = useState("");
  const [showOrder, setShowOrder] = useState(true);

  const hadleDropDownClass = () => {
    if (!seatClass) {
      setSeatClass("seats-show");
    } else {
      setSeatClass("");
    }

    if (showOrder) {
      setShowOrder(false);
    } else {
      setShowOrder(true);
    }
  };

  return (
    <>
      <section className="review-orders">
        <div
          className="review-orders__header"
          onClick={() => {
            hadleDropDownClass();
          }}
        >
          <h2 className="review-orders__title">
            {`review order(${totalItem} items)`}
          </h2>
          <p className="review-orders__buttons">
            <img
              src={dropDownButton}
              alt="button"
              className={showOrder ? "point-up" : "point-down"}
            />
          </p>
        </div>
      </section>
      <article className={`seats ${seatClass}`}>
        {totalSeats.map((item, index) => {
          return (
            <section className="seats__item" key={index}>
              {/* SEAT NO  */}
              <h2 className="seats__number">{`Seat ${index + 1}`}</h2>
              {/* FOOD ITEM INFO */}
              {item.map((_item) => {
                return (
                  <div className="food-item-info" key={`${_item.id}`}>
                    <img
                      src={_item.img_src}
                      alt={`${_item.name}`}
                      className="food-item-info__image"
                    />
                    <div className="food-item-info__name-quantity">
                      <h2 className="food-item-info__name-quantity--name">
                        {_item.name}
                      </h2>
                      <h2 className="food-item-info__name-quantity--quantity">
                        {`Qty:${_item.quantity}`}
                      </h2>
                    </div>
                    <h2 className="food-item-info__price">{`$${_item.price}`}</h2>
                  </div>
                );
              })}
            </section>
          );
        })}
      </article>
    </>
  );
};
export default DropDownOrder;
