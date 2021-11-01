import React from "react";

const Offer = ({src,link,index}) => {
    return(
      <a href={link}><img src={src} alt={`${index} offer`}></img> </a> 
    )
}

export default Offer;