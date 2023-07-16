import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  decrementQyantity,
  removeCard,
} from "../../redux/Actions";
const BasketCard = ({ el }) => {
  const dispath = useDispatch();
  return (
    <>
      <div className="cart">
      

        <div className="cart__img">
          <img
            src={el.volumeInfo?.imageLinks?.thumbnail}
            alt={el.volumeInfo?.title}
          />
        </div>
        <div className="cart__block">
          <div className="cart__block-title">
            <div className="cart__block-title-hear">
              <h1>{el.volumeInfo?.title}</h1>
              <div style={{ display: "flex", gap: "15px" }}>
                <h3 onClick={() => dispath(removeCard(el))}>Remove</h3>
              </div>
            </div>
            <span>{el.volumeInfo?.authors}</span>
            <Link>
              <button className="btn">
                <span onClick={() => dispath(decrementQyantity(el))}>-</span>
                {el.quantity}
                <span onClick={() => dispath(addToBasket(el))}>+</span>
              </button>
            </Link>
            <h4>Quantity:{el.quantity}</h4>
            <h2>${el.quantity * el.counter}</h2>
          </div>
        </div>
      </div>
      <hr
        style={{
          margin: "20px 0",
          width: '44%'
        }}
      />
    </>
  );
};

export default BasketCard;
