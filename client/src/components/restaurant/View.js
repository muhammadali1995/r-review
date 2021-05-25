import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Error } from "../error/Error";
import { RestautantAPI } from "./RestaurantAPI";

export const ViewRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState("");
  let { id } = useParams();
  useEffect(() => {
    RestautantAPI.get(id).then(
      (res) => {
        setRestaurant(res.data);
      },
      (error) => {
        setError(error);
      }
    );
  }, []);
  return restaurant ? (
    <div className="col-12">
      {error ? <Error message={error.message} /> : ""}
      <div
        className="top-banner row"
        style={{ maxHeight: "400px", overflow: "hidden" }}  >
        <img src={restaurant.photoUrl} />
      </div>
      <div className="row mx-0 bg-light py-5 px-2 bg-red justify-content-end">
        <button className="btn btn-info w-auto me-4 px-5">Edit</button>
        <button className="btn btn-danger w-auto px-5">Delete</button>
      </div>
      <div className="row my-3 mx-0">
        <h1>{restaurant.name}</h1>
        <div className="my-2">{restaurant.description}</div>
        <div className="my-2 alert alert-warning">{restaurant.address}</div>
      </div>
    </div>
  ) : (
    ""
  );
};
