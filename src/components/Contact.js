import { useState, useEffect } from "react";
const Contact= () =>{
    const [menu, setMenu]= useState([])
        useEffect(()=>{
            getRestaurantInfo();
        }, []);
    
        async function getRestaurantInfo(){
            const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.365622&lng=85.304041&restaurantId=798559&catalog_qa=undefined&submitAction=ENTER")
            const json= await data.json();
            setMenu(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
            console.log(json.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
        }
    return (
        
        <div>
            <h1>Welcome to Contact Page</h1>
            <h2>{menu}</h2>
            {console.log(menu)}
        </div>
    )
}

export default Contact;