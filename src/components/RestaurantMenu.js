import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {RESTAURANT_MENU}  from  "../utils/Urls"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () =>{
  // const [itemList, setItemsList] = useState(null);
    const {resId} = useParams();
   /*  useEffect(() =>{
        fetchResaurantMenu();
    },[]) */

   /*  const fetchResaurantMenu = async () =>{
        const data = await fetch(RESTAURANT_MENU + resId);
        const json = await data.json();
        //console.log(json.data)
        setItemsList(json.data)
        //console.log(itemList)
    } */
      const itemList = useRestaurantMenu(resId)
    
    if(!itemList){
        return<Shimmer />
    }
   
        console.log(itemList.cards)
     const {name,city,costForTwoMessage,cuisines} = itemList?.cards[0]?.card?.card?.info;
     const menuItems = itemList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
     console.log(menuItems)
    
    
   
    

   
   
    return(
        <div className="restaurant-menu">
            <div className="restaurantDetails">
                <div className="restName">
                <h1>{name}</h1>
                </div>
                {/* <h3>{city}</h3> */}
                <h3>{cuisines.join(",")}</h3>
                <h3>{costForTwoMessage}</h3>
                <h2>Menu</h2>
            </div>
            <ul className="menuList">
              { menuItems.map((menu) => <li>{menu.card.info.name} - Rs{menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}</li>)}
            </ul>

        </div>
    )
}
export default RestaurantMenu;