import { RESTAURANT_URL } from "../utils/Urls";
const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, locality, cloudinaryImageId, costForTwo } =
    props.restaurant.info;
    const {deliveryTime } =  props.restaurant.info.sla;
 // console.log(props.restaurant.info);
  return (
    <div className="restaurant-card m-4 w-[250px] border min-h-[450px]  bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img
        className="w-[240px] h-[240px] p-4 rounded-md"
        src={RESTAURANT_URL + cloudinaryImageId}
        alt="Restaurant Name"
      ></img>
      <div className="mx-3">
        <h2 className="font-bold py-3 text-lg"> {name}</h2>
        <h3> {cuisines.join(", ")}</h3>
        <h4>{costForTwo}</h4>
        <h3>{avgRating} stars</h3>
        <h4>{locality}</h4>
        <h5>{deliveryTime} mins</h5>
      </div>
      
    </div>
  );
};

export default RestaurantCard;
