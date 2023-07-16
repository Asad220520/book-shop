import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../BasketCard";
const Basket = () => {
  const { basket } = useSelector((s) => s);
  return (
    <div id="cart">
      <div className="container">
        <div class="cart__text">
          <h1>Your cart</h1>
          <p>
            Not ready to checkout? <span>Continue Shopping</span>{" "}
          </p>
        </div>
        {basket.length === 0 ? (
          <h1 style={{ color: "red", paddingTop: "50px" }}>
            Ваша карзина пусто!!!
          </h1>
        ) : (
          basket.map((el) => <BasketCard el={el} key={el.id} />)
        )}
      </div>
    </div>
  );
};

export default Basket;
