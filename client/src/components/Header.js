import { Link, BrowserRouter } from "react-router-dom";

export function Header() {
  const header = (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-silver">
        <Link to="/" className="navbar-brand">
          Restaurant Review
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurants" className="nav-link">
                Restaurants
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link disabled">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );

  return header;
}
