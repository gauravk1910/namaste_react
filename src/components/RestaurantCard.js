import { ImageCDN} from "../constants";



const RestaurantCard= ({name, cloudinaryImageId, cuisines}) => {
    
    return(
    <div className="restaurantcard"> 
       <img src= {ImageCDN + cloudinaryImageId}/>

        <h2>{name}</h2>
        <h4>{cuisines.join(" ")}</h4>
    </div>
    
    )
    
}

export default RestaurantCard;