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
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">{restaurant.description}</p>
          <p className="card-text alert alert-warning">{restaurant.address}</p>
        </div>
      </div>{" "}
    </div>
  );
};
