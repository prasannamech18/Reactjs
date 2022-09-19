import React from "react";
import img from './img.png';
import image from './img1.png'
import { Nav } from "./nav";
import './style1.css';

export function Data()
{
    return(
        <div>
            <Nav/>
        <div className="pic">
            <h1 className="text">Congratulations</h1>
        <div className="d1">
        <img src={image}className="i1"/>
            <h1 className="text1">Kiran v</h1>
            <p className="text1">vishnu Institute of Computer Education and Technology,<br/>Bhimavaram</p>
            <img src={image}className="i2"/>
            

        </div>
        
        </div>
        </div>
    );
}