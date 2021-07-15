import React, { Fragment, useState } from "react";
import Zapatilla from "./components/Zapatilla";
import Cart from "./components/Cart";
import "./styles/styles.css";

// IMPORTO LAS IMAGENES
import Zapatilla1 from "./images/Nike1.png";
import Zapatilla2 from "./images/Nike2.png";
import Zapatilla3 from "./images/Nike3.png";
import Zapatilla4 from "./images/Nike4.png";
import Zapatilla5 from "./images/Nike5.png";

function App() {
  const [zapatillas, setZapatilla] = useState([
    { id: 5, image: Zapatilla1, nombre: "Nike", precio: 1600 },
    { id: 2, image: Zapatilla2, nombre: "Nike", precio: 1790 },
    { id: 3, image: Zapatilla3, nombre: "Nike", precio: 1400 },
    { id: 4, image: Zapatilla4, nombre: "Nike", precio: 1500 },
    { id: 1, image: Zapatilla5, nombre: "Nike", precio: 1790 },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      {/* SECTION CONTENEDOR GLOBAL */}
      <section className="container">
        {/* SECTION DE LA CABECERA */}
        <section className="container__header">
          {/* BOTON DE LA CABECERA */}
          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div>

          {/* TITULO DE LA CABECERA */}
          <div className="container__header__title">
            <h3 className="container__header__title--text">NIKE STORE</h3>
          </div>

          {/* CART DE LA CABECERA */}
          <div className="container__header__cartDiv">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>

        {/* SECTION CONTENEDOR PRINCIPAL */}
        <section className="container__content">

          <div className="container__content__title">
            <h1>¡Nike te guia en cada uno de tus pasos!</h1>
          </div>

          <div className="container__content__listZapatilla">
            {zapatillas.map((zapatilla) => (
              <Zapatilla
                key={zapatilla.id}
                zapatilla={zapatilla}
                cart={cart}
                setCart={setCart}
                zapatillas={zapatillas}
              />
            ))}
          </div>

        </section>

        {/* SECTION FOOTER */}
        <section className="container__footer">
          <p>NIKE STORE 2021 - Todos los derechos reservados</p>
        </section>
        
      </section>
    </Fragment>
  );
}

export default App;
