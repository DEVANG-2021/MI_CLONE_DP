import React from "react";
import { Link } from "react-router-dom";
import '../styles/HotAccessoeriesMenu.css'

const HotAccessoriesMenu = () => {
    return(
        <div className="HotAccessoeriesMenu">
            <Link className="HotAccessorieslink" to="/music">Music Store</Link>
            <Link className="HotAccessorieslink" to="/smartDevice">Smart Devices</Link>
            <Link className="HotAccessorieslink" to="/home">Home</Link>
            <Link className="HotAccessorieslink" to="/lifestyle">Lifestyle</Link>
            <Link className="HotAccessorieslink" to="/mobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu;