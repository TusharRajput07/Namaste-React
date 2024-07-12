// Restaurant Card Component
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { RES_IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // const resData = props.resData;
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
    locality,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={RES_IMAGE_URL + cloudinaryImageId} />
      <div className="res-info">
        <div className="upper-container">
          <div className="name">{name}</div>
          <div className="stars">
            {avgRating}
            <StarRoundedIcon fontSize="inherit" />
          </div>
        </div>
        <div className="cuisine">{cuisines.join(", ")}</div>
        <div className="location">
          <LocationOnRoundedIcon fontSize="inherit" className="location-icon" />
          {areaName + ", " + locality}
        </div>
        <div className="lower-container">
          <div className="price">{costForTwo}</div>
          <div className="time">{sla.deliveryTime} minutes</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
