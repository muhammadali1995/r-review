import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { isAdmin } from "../roles";

import { userContext } from "./../context/UserContext";

export function Header() {
  const history = useHistory();
  const { currentUser, setCurrentUser } = useContext(userContext);
  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg px-3" style={{backgroundColor: "rgb(230 219 205)"}}>
      <>
        <NavLink to="/" className="navbar-brand">
          RR
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/">Restaurants</NavLink>
            </li>

            {isAdmin(currentUser) ? (
              <li className="nav-item">
                <NavLink
                  to="/users"
                  activeClassName="active border-bottom text-primary"
                  className="nav-link">
                  Users
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
          <div className="ml-auto d-flex">
            {!currentUser ? (
              <>
                <NavLink
                  className="nav-link btn btn-outline-primary"
                  to="/register"
                >
                  Register
                </NavLink>
                <NavLink
                  className="nav-link btn btn-outline-primary ms-2"
                  to="/login"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </>
    </nav>
  );
}
