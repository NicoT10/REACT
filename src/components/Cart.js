import React, { Fragment } from "react";
import "../styles/styles.css";
import Zapatilla from "./Zapatilla";

const Cart = ({ cart, setCart }) => {
  const viewCart = () => {
    {
      document.querySelector(
        "div.container__header__cartDiv--list"
      ).style.display = "none"
        ? (document.querySelector(
            "div.container__header__cartDiv--list"
          ).style.display = "flex")
        : (document.querySelector(
            "div.container__header__cartDiv--list"
          ).style.display = "none");
    }
  };

  const closeDiv = () => {
    document.querySelector(
      "div.container__header__cartDiv--list"
    ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="container__header__cartDiv">
        <p className="container__header__cartDiv--count">{cart.length}</p>
        <button
          className="container__header__cartDiv--btnCart"
          onClick={() => viewCart()}
        ></button>
      </div>
      <div className="container__header__cartDiv--list">
        <button
          className="container__content__zapatillas--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {cart.length === 0 ? (
          <p>Carrito vacio, ¡Realiza tu primer compra!</p>
        ) : (
          cart.map((zapatilla) => (
            <Zapatilla
              key={zapatilla.id}
              zapatilla={zapatilla}
              cart={cart}
              setCart={setCart}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};
export default Cart;
