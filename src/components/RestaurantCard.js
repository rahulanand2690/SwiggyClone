import { RESTAURANT_URL } from "../utils/Urls";
const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, locality, cloudinaryImageId, costForTwo } =
    props.restaurant.info;
    const {deliveryTime } =  props.restaurant.info.sla;
 // console.log(props.restaurant.info);
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={RESTAURANT_URL + cloudinaryImageId}
        alt="Restaurant Name"
      ></img>
      <h2> {name}</h2>
      <h3> {cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h3>{avgRating} stars</h3>
      <h4>{locality}</h4>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCard;
