import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const RestaurantMenu= ()=>{
    const [menu, setMenu]= useState([])
    const params= useParams();
    const {id}=params;
    console.log(params)

    useEffect(()=>{
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.365622&lng=85.304041&restaurantId=798559&catalog_qa=undefined&submitAction=ENTER")
        const json= await data.json();
        setMenu(json.data.cards[7].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.ItemCards[0].card.info.name)
        console.log(menu);
    }

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default RestaurantMenu;