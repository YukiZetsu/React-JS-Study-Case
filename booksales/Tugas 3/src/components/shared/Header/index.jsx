import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "nav-link px-3 text-primary fw-bold border-bottom border-2 border-primary"
      : "nav-link px-3 text-secondary";

  return (
    <header className="border-bottom shadow-sm bg-white sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          {/* KIRI: LOGO */}
          <div className="col-md-3 mb-2 mb-md-0">
            <Link
              to="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "rgb(116, 192, 252)" }}
              ></i>
              <span className="ms-2 fs-4 fw-bold">MikoBookStore</span>
            </Link>
          </div>

          {/* TENGAH: MENU */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className={navLinkStyle}>
                Book
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className={navLinkStyle}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* KANAN: TOMBOL */}
          <div className="col-md-3 text-end">
            <Link to="/login" className="me-2">
              <button type="button" className="btn btn-outline-primary">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
