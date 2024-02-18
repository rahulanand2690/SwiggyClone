import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {RESTAURANT_MENU}  from  "../utils/Urls"
import {MENU_IMAGE_URL}  from  "../utils/Urls"
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import SampleDish from "../../public/SampleDish.png"
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
     const {name,city,areaName,costForTwoMessage,cuisines} = itemList?.cards[0]?.card?.card?.info;
     const menuItems = itemList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
     console.log(menuItems)
    
    
   
    

   
   
    return(
        <div className="restaurant-menu  ">
            <div className="restaurantDetails justify-center  p-10">
                <div className="restName">
                <h1 className="font-bold text-lg">{name}</h1>
                </div>
                <h3>{areaName} , {city}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
                <h2 className="font-bold"> Menu</h2>
            </div>
            <ul className="menuList  flex-col justify-center  px-8 ">
              { menuItems.map((menu) => 
              <div className="p-2 m-2 border-2 border-solid border-gray-200 w-[500px] rounded-lg hover:bg-gray-100 flex font-bold justify-center items-center">
              <li className="flex flex-col">{menu.card.info.name} 
              <span className="justify-center items-center">Rs {menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}</span>
              
              
              </li>
              <img className="h-[100px] w-[100px] p-1  m-2 rounded-lg" src={menu.card.info.imageId ? MENU_IMAGE_URL + menu.card.info.imageId : SampleDish}></img>
              </div>
              )}
             
            </ul>

        </div>
    )
}
export default RestaurantMenu;