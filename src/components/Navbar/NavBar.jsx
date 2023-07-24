import CartWidget from "../Cart/CartWidget";
// eslint-disable-next-line react/prop-types
const Navbar = () => {
  return (
    <header className="base-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand logo_Infinity" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Notebooks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Discos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Placas
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
