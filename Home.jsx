import React from 'react'
import web from "../src/images/home.svg";
import {NavLink} from "react-router-dom"
import Common from "./Common"


const Home =() => {
    return (
        <>
          <Common name = 'We Invest In Inovation ' 
          imgsrc={web} 
          visit="/Contact" 
          btname="I want Funding"/>  
        </>
    );
};

export default Home;