import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
const [listOfRestaurants, setListOfRestaurants] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] =useState([]);
const [topRatedRestaurants, setTopRatedRestaurants] =useState([]);

const [searchText, setSearchText] =useState("");

useEffect(()=>{
    fetchData();
}, []);

const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6217627&lng=77.0558233&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}

    return listOfRestaurants?.length===0 ? (<Shimmer/> ):(
        <div className="body"> 
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                        setTopRatedRestaurants([]);
                    }}>Search</button>
                </div>
                <button className="filterBtn" onClick={()=>{
                const topRatedRestaurants = listOfRestaurants.filter((res)=> res.info.avgRating>4.5);
                setTopRatedRestaurants(topRatedRestaurants);
            }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {topRatedRestaurants.length!==0 ?(
                    topRatedRestaurants?.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    )))
                :
                (filteredRestaurant?.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )))
                }
            </div>
        </div>
    );
};

export default Body;