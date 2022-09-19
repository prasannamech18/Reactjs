import React from "react";
import './style1.css';
import img from './data.jpg';
import img1 from './it.jpg';
import img2 from './vr.jpg';
import img3 from './it.jpg';

export function Tech(){
    return(
        <div className="bk">
            <h1 className="text">Learn 4.0 Technologies</h1>
            <p className="bc">Technology, the application of scientific knowledge to the practical aims of human life or,
                 as it is sometimes phrased, to the change and manipulation of the human environment. 
                 The subject of technology is treated in a number of articles.
                 For general treatment, see technology, history of; hand tool.</p>
            <div className="b1">
                <br/>
                <h3>Data scientist</h3>
                <p>Data science combines math and statistics, specialized programming,
                     advanced analytics</p>
                     <img src={img}className="b2"/>
                     
         </div>
            <div className="b3"><br/>
                <h3>IOT Developer</h3>
                <p>One needs to understand that IoT is nothing but an amalgamation of different existing 
                    technologies driven towards a common goal.</p>
                    <img src={img1}className="b4"/>

            </div>
            <div className="b5"><br/>
                <h3>VR Developer</h3>
                <p>A VR developer creates whole new digital settings that users can see
                     through a device like the Oculus headset</p>
                     <img src={img2}className="b4"/>
            </div>
            <div className="b3"><br/>
                <h3>ML Engineer</h3>
                <p>What machine learning engineers do. Machine learning engineers act as critical members of the data science team.</p>
                <img src={img3}className="b4"/>
            </div>

        </div>
    );
}