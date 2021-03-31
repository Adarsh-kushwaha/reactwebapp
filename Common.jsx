import React from 'react'
import web from "../src/images/home.svg";
import {NavLink} from "react-router-dom"


const Common =(props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className = "row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className = "col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.name}
                                <strong className="brand-name">Fortune Investers
                            </strong>
                            </h1>
                             <h5 className="my-3">We are group of those top 50 investar intially 
                                 invested in fortune 500 companies</h5>  
                                 <div className="mt-4">
                                 <button type="button" class="btn btn-outline-secondary"><NavLink to = {props.visit}>{props.btname}</NavLink></button>
                                     </div> 
                        </div>
                        <div className = " pt-4 col-lg-6  order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="homeimg"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Common;