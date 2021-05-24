import { RestaurantItem } from "./RestaurantItem";

export const ListRestauarants = ({ restaurants }) => {
  return (
    <div className="row my-4">
        {restaurants.map((r) => (
          <RestaurantItem key={r._id} restaurant={r} />
        ))}
    </div>
  );
};
