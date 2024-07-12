// Body Component
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";

const Body = () => {
  // local state variable for page content
  const [restaurantList, setRestaurantList] = useState(resList);
  // local state variable for filter button
  const [isFiltered, setIsFiltered] = useState(false);

  const filterPage = () => {
    setIsFiltered(!isFiltered);
    if (isFiltered) {
      const filteredList = restaurantList.filter(
        (res) => res.info.avgRating > 4
      );
      setRestaurantList(filteredList);
    } else {
      setRestaurantList(resList);
    }
  };

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="search-bar"
        />
        <SearchRoundedIcon fontSize="large" className="search-icon" />
      </div>
      <div className="heading-container">
        <div className="heading">
          Restaurants with online food delivery in Delhi
        </div>
        <div class="filter">
          <div className="filter-btn" onClick={filterPage}>
            {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
          </div>
        </div>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
