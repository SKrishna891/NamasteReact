const { useEffect, useState } = require("react");
import { Menu_API } from "./constants";

const useRestaurantmenu =(resid) =>{
    

    const[resinfo, setresinfo] = useState(null);

    useEffect(()=>{
  fetchdata();
    },[]);

    const fetchdata = async ()=>{
        const data = await fetch(Menu_API + resid);

        const json = await data.json();

        setresinfo(json.data);
    }

    return resinfo;

}

export default useRestaurantmenu;