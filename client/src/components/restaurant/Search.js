import { Link } from "react-router-dom"

export const SearchRestaurants = () => {
  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between">
        <h3 className="header text-success">My Restaurants</h3>
        <Link to="/create" className="btn btn-outline-success">Add new restaurant</Link>
      </div>
      <ul>
        <li>Restaurant 1</li>
      </ul>
    </div>
  );
};
