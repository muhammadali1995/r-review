import { useEffect, useState } from "react";
import { Error } from "../error/Error";
import { RestautantAPI } from "./RestaurantAPI";
import { SearchRestaurants } from "./Search";
import { ListRestauarants } from "./List";
import { Link } from "react-router-dom";

export const Restaurants = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("use effect");
    onSearch("");
  }, []);

  const onSearch = async (text) => {
    try {
      const respnonse = await RestautantAPI.getAll(text);
      setData(respnonse.data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="my-5">
      {error ? <Error message={error.message} /> : ""}
      <div className="d-flex justify-content-between">
        <h3 className="header text-success">My Restaurants</h3>
        <Link to="/create" className="btn btn-outline-success">
          Add new restaurant
        </Link>
      </div>
      <div className="my-3 col-12 col-md-6 offset-md-2 offset-lg-3 my-5">
        <SearchRestaurants onSearch={onSearch} />
      </div>
      <ListRestauarants restaurants={data} />
    </div>
  );
};
