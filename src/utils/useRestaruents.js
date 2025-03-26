import { useEffect, useState } from "react";


const useRestaruents = ()=>{

    const [listofRestaruents, setListofRestaruents] = useState([]);

    const[filterdRestauents,newfilterdRestaruents] = useState([]);

    useEffect(()=>{
        fetchdata();
    },[]);

    const fetchdata = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListofRestaruents(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        newfilterdRestaruents(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return (
        {listofRestaruents,filterdRestauents}
    );
};

export default useRestaruents;