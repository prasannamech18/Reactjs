import React from 'react';
import {Link} from 'react-router-dom';


export function Nav(){
    return(
        <div>
            
        <ul>
            <Link to='/'><li>Ass1</li></Link>
            <Link to='/about'><li>Ass2</li></Link>
            <Link to='/clear'><li>Ass3</li></Link>
        </ul>
        </div>
    );

}