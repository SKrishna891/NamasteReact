
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

import useRestaurantmenu from "../utils/useRestaurantmenu";


const Restaurantmenu = ()=>{

    

    const {resid} = useParams();

    const resinfo = useRestaurantmenu(resid);

   
    if(resinfo===null) return <Shimmer/>
   const {name,cuisines,avgRating,costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;
   console.log(name);

   const {itemCards} = resinfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   console.log(itemCards);
  
    return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}-{costForTwoMessage}</h2>
            <h2>{avgRating}</h2>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>
                    <li key={item.card.info.id}>{item.card.info.name}-{"Rs."} {item.card.info.price || item.card.info.defaultPrice}</li>
                )}
                
            </ul>
        </div>
    )
}

export default Restaurantmenu;