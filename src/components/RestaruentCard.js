import { CDN_LINKS } from "../utils/constants.js";

  const RestaruentCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,costForTwoString,deliveryTime,avgRating} = resData?.info;
return(
    <div className="res-card">
        <img  className="res-logo" alt="logo_container" src={CDN_LINKS +
          cloudinaryImageId}/>
    <h3>{name}</h3>
    <h4>{cuisines.join(",")}</h4>
    <h4>{costForTwoString}</h4>
    <h4>{deliveryTime}miniuts</h4>
    <h4>{avgRating}stars</h4>
    </div>
)
}

export  default RestaruentCard ;