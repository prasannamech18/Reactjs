// import React from "react";
import React, {useState} from "react";

export function In(){
    const[x,setx]=useState(1);
    return(
        <div>
        <h1>{x}</h1>
        <button onClick={()=>setx(x+1)}>Add</button>
        <button onClick={()=>setx(x-1)}>sub</button>
        </div>
    );
}