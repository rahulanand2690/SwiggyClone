import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {RESTAURANT_MENU}  from  "../utils/Urls"
import Shimmer from "./Shimmer";
const RestaurantMenu = () =>{
    const [itemList, setItemsList] = useState(null);
    const {resId} = useParams();
    console.log(resId)
    useEffect(() =>{
        fetchResaurantMenu();
    },[])

    const fetchResaurantMenu = async () =>{
        const data = await fetch(RESTAURANT_MENU + resId);
        const json = await data.json();
        //console.log(json.data)
        setItemsList(json.data)
        //console.log(itemList)
    }
    
    if(!itemList){
        return<Shimmer />
    }
    console.log(itemList.cards)
     const {name,city,costForTwoMessage,cuisines} = itemList?.cards[0]?.card?.card?.info;
     const menuItems = itemList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
     console.log(menuItems)
   
    

   
   
    return(
        <div className="restaurant-menu">
            <h1> {name}</h1>
            <h3>{city}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
           
            <ul>
              { menuItems.map((menu) => <li>{menu.card.info.name} - Rs{menu.card.info.price/100}</li>)}
            </ul>

        </div>
    )
}
export default RestaurantMenu;