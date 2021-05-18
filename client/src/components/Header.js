import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-silver">
      <NavLink to="/" className="navbar-brand">
        Restaurant Review
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              activeClassName="active border-bottom text-primary"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/restaurants"
              activeClassName="active border-bottom text-primary"
              className="nav-link"
            >
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/users"
              activeClassName="active border-bottom text-primary"
              className="nav-link"
            >
              Users
            </NavLink>
          </li>
        </ul>
        <div className="ml-auto d-flex">
          <NavLink className="nav-link btn btn-outline-primary" to="/register">
            Register
          </NavLink>
          <NavLink
            className="nav-link btn btn-outline-primary ms-2"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
