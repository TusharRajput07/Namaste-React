// Body Component
import RestaurantCard, { withOffers } from "./RestaurantCard";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const SHOW_TOP = "showTop";
const SHOW_ALL = "showAll";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null); // local state variable for page's current content
  const [originalList, setOriginalList] = useState([]); // local state variable for original restaurant list (it will never change)
  const [btnName, setBtnName] = useState(SHOW_TOP); // local state variable for filter button
  const [searchText, setSearchText] = useState(""); // local state variable for search input text

  const RestaurantCardOffered = withOffers(RestaurantCard); // restaurant card component with offers

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // converting the data to json format (as the data returned will be non-readable)
    json = await data.json();

    const resList =
      json.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setOriginalList(resList);
    // console.log(resList[2].info.aggregatedDiscountInfoV3.header);
    setRestaurantList(resList);
  };

  const filterPage = () => {
    if (btnName == SHOW_TOP) {
      setBtnName(SHOW_ALL);
      const filteredList = restaurantList.filter(
        (res) => res.info.avgRating > 4.2
      );
      setRestaurantList(filteredList);
    } else {
      setBtnName(SHOW_TOP);
      setRestaurantList(originalList);
    }
  };

  const handleSearch = () => {
    const filteredList = originalList.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setRestaurantList(filteredList);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  if (!useOnlineStatus()) {
    return <h1>Looks like you are offline!</h1>;
  }

  if (!restaurantList) {
    // first render (before api data) (restList has null in it)
    return <Shimmer />;
  }
  // second render (after api data)
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="search-bar"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <SearchRoundedIcon
          fontSize="large"
          className="search-icon"
          onClick={handleSearch}
        />
      </div>

      {restaurantList.length === 0 ? (
        <div className="not-found">Oops! No Search Results Found.</div>
      ) : (
        <>
          <div className="heading-container">
            <div className="heading">
              Restaurants with online food delivery in Delhi
            </div>
            <div className="filter">
              <div className="filter-btn" onClick={filterPage}>
                {btnName === SHOW_TOP
                  ? "Show Top Restaurants"
                  : "Show All Restaurants"}
              </div>
            </div>
          </div>
          <div className="res-container">
            {restaurantList?.map((restaurant) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurant/" + restaurant?.info?.id}
              >
                {restaurant?.info?.aggregatedDiscountInfoV3 &&
                typeof restaurant.info.aggregatedDiscountInfoV3 === "object" &&
                Object.keys(restaurant?.info?.aggregatedDiscountInfoV3)
                  ?.length > 0 ? (
                  <RestaurantCardOffered resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
