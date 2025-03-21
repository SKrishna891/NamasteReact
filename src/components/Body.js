import { useState } from "react";
import resList from "../utils/mockdata";
import RestaruentCard from "./RestaruentCard";
import resList from "../utils/mockdata";


const Body = () => {
    const [listofRestaruents, setListofRestaruents] = useState(resList);
    return(<div className="body">
     <div className="filter">
        <button className="filter-res" onClick={() =>{
            const filterdRestauents = listofRestaruents.filter((res)=>res.data.avgRating>4);
            setListofRestaruents(filterdRestauents);
        }}>Top rated restaurants</button>
     </div>
     <div className="res-container">
        {listofRestaruents.map((restaurant)=>
<RestaruentCard key ={ restaurant.data.id} resData={restaurant}/>)}
     </div>
    </div>)
}

export default Body;