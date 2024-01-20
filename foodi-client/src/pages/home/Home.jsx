import React from "react";
import Banner from "../../components/Banner"
import Catagories from "./Categories";
import SpecialDishes from "./SpecialDishes";
import Testimonials from "./Testimonials";
const Home = ()=>{
    return (
        <div>
           <Banner/>
           <Catagories/>
           <SpecialDishes/>
           <Testimonials/>
        </div>
    )
}

export default Home;