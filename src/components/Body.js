import { useEffect, useState } from "react";
import {restaurants } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(serachText, restaurants){
    return restaurants.filter((item) => item.info.name.toLowerCase().includes(serachText.toLowerCase()));
}

const Body= () => {
    const [serachText, setSearchText]= useState(""); // return a array [variable name, fun to update the variable]
    const [allrestaurant, setAllRestaurant]= useState([]);
    const [filteredrestaurant, setFilteredrestaurant]= useState([]);

    useEffect(()=> {
        getRestaurant();
        
    }, []);

    async function getRestaurant(){

        // const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=20.3506773&lng=85.80633600000002")
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.365622&lng=85.304041")
        const json= await data.json();
        console.log(json);
        //optional chaning (?)
        setFilteredrestaurant(json.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurant(json.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        
    }

    //Conditional renderring
    //if restaurant is empty => shimmer ui
    //if restaurant has data => actual data ui

    //not render component(early return)
    if(!allrestaurant) return null;


    return filteredrestaurant?.length===0 ? (<Shimmer />):  (
        <>
            <div> 
                <input 
                type="text" 
                className="search-input" 
                placeholder="Serach"
                value={serachText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                ></input>
                
                
                <button className="search-btn"
                onClick={()=> {
                    //filter the data
                    const data= filterData(serachText, allrestaurant)

                    //update the res. list
                    setFilteredrestaurant(data);
                }}
                >Search</button>
            </div>



            <div className="restauranlist">
                
                
                {
                  filteredrestaurant.length===0? 
                  <h1>No Restaurant Found</h1>:
                
                filteredrestaurant?.map((restaurant)=>{
                        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                }
                    
                )}
            </div>
        </> 
    )
}

export default Body;
