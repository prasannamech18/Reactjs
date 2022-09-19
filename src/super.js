import React from "react";
import img from './Kohli.jpg';
import img1 from './dhoni.jpg';
import { Nav } from "./nav";

export function Super(){
    return(
        <div>
            <Nav/>
        <div className="div1">
            <div>
            <h2 className="t">Super Over League</h2>
            <img src={img}className="i3"/>
            <img src={img1}className="i4"/>

            </div>

        </div>
        </div>
    );
}