import { NavLink } from "react-router-dom";

export const RestaurantItem = ({ restaurant }) => {
  return (
    <div className="col col-sm-6 col-lg-3 my-2">
      <div className="card">
        <img
          className="card-img-top"
          src={restaurant.photoUrl}
          alt="restaurant photo"
        />
        <div className="card-body">
          <h5 className="card-title">
            <NavLink className="text-decoration-none" to={"/restaurants/" + restaurant._id}>
              {restaurant.name}
            </NavLink>
          </h5>
          <p className="card-text">{restaurant.description}</p>
          <p className="card-text alert alert-warning">
            <i className="bi bi-geo-alt-fill me-1"></i>
            {restaurant.address}
          </p>
        </div>
      </div>
    </div>
  );
};
