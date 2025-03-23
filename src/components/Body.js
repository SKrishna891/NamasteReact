import { useEffect, useState } from "react";

import RestaruentCard from "./RestaruentCard";
import Shimmer from "./shimmer";



const Body = () => {
    const [listofRestaruents, setListofRestaruents] = useState([]);

    const[filterdRestauents,newfilterdRestaruents] = useState([]);

    const [searchText, newSearchText] = useState("");

    useEffect(()=>{
        console.log("useEfeefeced");
        fetchData();
    },[]);

    const fetchData = async() =>{
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();
console.log(json);
    setListofRestaruents(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    newfilterdRestaruents(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   
   
    return listofRestaruents.length ===0 ?(<Shimmer/>) :
    (<div className="body">
     <div className="filter">
        <div className="search"> 
            <input type="text"  className="search-box" value={searchText} onChange={(e)=>{
            newSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
               const filterdRestauents = listofRestaruents.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
               newfilterdRestaruents(filterdRestauents);
            }}>search</button>
        </div>
        <button className="filter-res" onClick={() =>{
            const filterdRestauents = listofRestaruents.filter((res)=>res.info.avgRating>4);
            newfilterdRestaruents(filterdRestauents);
        }}>Top rated restaurants</button>
     </div>
     <div className="res-container">
        {filterdRestauents.map((restaurant)=>
<RestaruentCard key ={ restaurant.info.id} resData={restaurant}/>)}
     </div>
    </div>)
}

export default Body;