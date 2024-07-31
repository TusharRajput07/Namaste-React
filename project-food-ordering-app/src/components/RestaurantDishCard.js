import StarRoundedIcon from "@mui/icons-material/StarRounded";

const RestaurantDishCard = (props) => {
  const { dish } = props;

  const { name, price, defaultPrice, isVeg, ratings, description, imageId } =
    dish;

  return (
    <div className="res-dish-card">
      <div className="res-dish-left-container">
        <div className="res-dish-left-upper-container">
          <div className="res-dish-name">{name}</div>
          <div className="res-dish-type">
            <div className={`type-outer ${isVeg ? "" : "red-icon-outer"}`}>
              <div
                className={`type-inner ${isVeg ? "" : "red-icon-inner"}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="res-dish-price">
          &#8377; {price ? price / 100 : defaultPrice ? defaultPrice / 100 : ""}
        </div>
        {ratings?.aggregatedRating?.rating && (
          <div className="res-dish-stars">
            {ratings?.aggregatedRating?.rating}
            <StarRoundedIcon fontSize="inherit" />
          </div>
        )}
        <div className="res-dish-description">{description}</div>
      </div>
      <div className="res-dish-right-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            imageId
          }
          alt="dish-image"
          className="res-dish-image"
        />
        <div className="add-to-cart">Add</div>
      </div>
    </div>
  );
};

export default RestaurantDishCard;
