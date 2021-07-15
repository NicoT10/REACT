import React from "react";
import "../styles/styles.css";

const Zapatilla = ({ zapatilla, cart, setCart, zapatillas }) => {
  const { nombre, image, precio, id } = zapatilla;
  const addZapatilla = (id) => {
    const zapatilla = zapatillas.filter((zapatilla) => zapatilla.id === id);
    setCart([...cart, ...zapatilla]);
    console.log(cart.length);
  };
  const delZapatilla = (id) => {
    const zapatillas = cart.filter((zapatilla) => zapatilla.id !== id);
    setCart(zapatillas);
  };

  return (
    <ul className="container__content__zapatillas">
      <img className="container__content__zapatillas--image" src={image}></img>
      <li className="container__content__zapatillas--nombre">{nombre}</li>
      <li className="container__content__zapatillas--precio">${precio}</li>
      {zapatillas ? (
        <button
          className="container__content__zapatillas--btnAdd"
          type="button"
          onClick={() => addZapatilla(id)}
        >
          Agregar +
        </button>
      ) : (
        <div>
          <button
            className="container__content__zapatillas--btnDel"
            type="button"
            onClick={() => delZapatilla(id)}
          >
            Eliminar
          </button>
          <button
            className="container__content__zapatillas--btnAdd"
            type="button"
            onClick={() => delZapatilla(id)}
          >
            Confirmar
          </button>
        </div>
      )}
    </ul>
  );
};

export default Zapatilla;
