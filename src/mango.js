import React, {useState} from "react";
import img from './man.jpg';
import img1 from './ban.jpg';

export function Man(){
    const [x,setx]=useState(0);
    const [a,setb]=useState(0);
    return(
        <div className="man">
            <div className="man1">
                <h1 className="mt">bob ate {x}   mangoes {a}  bananas</h1>
                <div className="d">
                <div>
                <img src={img}className="mti"/>
                </div>
                <div>
                    <img src={img1}className="mti1"/>
                </div>
                </div><br/>
                <button className="btn"onClick={()=>setx(x+1)}>Eat Mango</button>
                <button className="btn1"onClick={()=>setb(a+1)}>Eat Banana</button>

            </div>

        </div>
    );
}