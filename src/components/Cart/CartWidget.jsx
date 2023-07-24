export const CartWidget = () => {
  return (
    <form className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li
          className="nav-item"
          id="chart"
          type="button"
          data-bs-scroll="true"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <p id="items" className="bi bi-cart-fill"></p>
        </li>
      </ul>
      <div className="ocultar">
        <span className="contador" id="cantidadProductos">
          0
        </span>
      </div>
    </form>
  );
};

export default CartWidget;
