import RestaurantCard from "./RestaurantCard";
import mockRestaurants from "../utils/mockRestaurants";
import {useState, useEffect} from "react";
import {SWIGGY_RESTAURANT_DATA} from "../utils/Urls"
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {
  //const restData = mockRestaurants;
  const [listOfRestaurant , setListOfRestaurant] = useState([]);
  const [topRestruant, setTopRestaurant] = useState(listOfRestaurant);
  const [searchText, setSerachText] = useState("");

  useEffect(() =>{
    fetchData();
    //console.log("useEffect called")
  },[])
  
  const fetchData = async () =>{
    const data = await fetch(SWIGGY_RESTAURANT_DATA);
    const json = await data.json();
    console.log(json.data)
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setTopRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  if(listOfRestaurant.length === 0){
    return <Shimmer />
  }
  return (
    <div className="body">
        <div className="filter-container m-4 p-4">
            <input type="text"  className="border border-solid border-black px-4 py-1 mx-4" value={searchText} onChange = {(e) =>{setSerachText(e.target.value)}}></input>
        <button className = "filter-btn  bg-green-200 py-1 px-4 rounded-md" onClick = {() =>{ 
          let filterres =  listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setTopRestaurant(filterres);
          console.log(searchText)
         }
        }> Search </button>

        <button className = "filter-btn  bg-green-200 px-4 py-1 mx-4 rounded-md" onClick = {() =>{ 
          let filterres = ( listOfRestaurant.filter(res =>res.info.avgRating > 4));
          setTopRestaurant(filterres);
          console.log(filterres)
         }
         }> Top Rated Restaurant </button>


        </div>
         
        <div className="restaurant-container flex flex-wrap mx-8">
       
      { topRestruant.map((restData) => (
      <Link to ={"/restaurant/"+restData.info.id}> <RestaurantCard key={restData.info.id} restaurant={restData} /></Link> 
      ))}
    </div>
    </div>
    
  );
};

export default Body;
