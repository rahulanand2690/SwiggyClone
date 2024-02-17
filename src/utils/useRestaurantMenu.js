import {useState, useEffect} from "react";
import {RESTAURANT_MENU}  from  "../utils/Urls"

const useRestaurantMenu = (resId)=>{
    const [itemList, setItemsList] = useState(null);
    useEffect(() => {
        fetchRestaurantMenu();

    },[])

    const fetchRestaurantMenu = async() =>{
       const data =  await fetch(RESTAURANT_MENU + resId);
       const json = await data.json();
       setItemsList(json.data)
    }
    return itemList;
}
export default useRestaurantMenu;