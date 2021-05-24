export const SearchRestaurants = ({ onSearch }) => {
  const onChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <input
      placeholder="Search Restaurants"
      type="text"
      className="form-control"
      onChange={onChange}
    />
  );
};
