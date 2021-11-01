import React from 'react';
import './App.css';
import PreNavbar from './component/PreNavbar';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Slider from "./component/Slider.js";
import data from './data/data.json';
import Offers from './component/Offers.js';
import Heading from './component/Heading.js'; 
import StarProduct from './component/StarProduct.js';
import HotAccessoriesMenu from './component/HotAccessoriesMenu.js';
import HotAccessories from './component/HotAccessories.js';
import ProductReviews from './component/ProductReviews.js';
import Videos from './component/Videos.js';
import Banner from './component/Banner.js';
import Footer from './component/Footer.js';
import NavOptions from './component/NavOptions.js';
import NavOptions1 from './component/NavOptions1';

function App() {
  return (
    <Router>
        <PreNavbar/>
        <Navbar/>
        <Route exact path="/miphones">
           <NavOptions1 miPhones={data.miPhones}/>
        </Route>

        <Route exact path="/redmiphones">
           <NavOptions1 redmiPhones={data.redmiPhones}/>
        </Route>

        <Route exact path="/tv">
           <NavOptions1 tv={data.tv} />
        </Route>

        <Route exact path="/laptop">
           <NavOptions1 laptop={data.laptop}/>
        </Route>

        <Route exact path="/fitnessandlifestyle">
           <NavOptions1 fitnessAndLifeStyle={data.fitnessAndLifeStyle}/>
        </Route>

        <Route exact path="/home1">
           <NavOptions1 home={data.home}/>
        </Route>

        <Route exact path="/audio">
           <NavOptions1  audio={data.audio} />
        </Route>

        <Route exact path="/accessories">
           <NavOptions1 accessories={data.accessories}/>
        </Route>
         
         <Slider start={data.banner.start}/>
        <Offers offer={data.offer}/>
        <Heading text="STAR PRODUCTS"/>
        <StarProduct starProduct={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu/>
         
        <Route exact path="/music">
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/> 
        </Route>
         
         <Route exact path="/smartDevice">
          <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/> 
        </Route>
       
        <Route exact path="/home">
          <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/> 
        </Route>
        
        <Route exact path="/lifeStyle">
          <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/> 
        </Route>
       
        <Route exact path="/mobileAccessories">
          <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/> 
        </Route>

        <Heading text="PRODUCT REVIEWS"/>

        <ProductReviews productReviews={data.productReviews}/>
        <Heading text="VIDEOS"/>

        <Videos videos={data.videos}/>

        <Heading text="IN THE PRESS"/>

        <Banner banner={data.banner}/>
        <Footer footer={data.footer}/>
      </Router>

  );
}

export default App;
