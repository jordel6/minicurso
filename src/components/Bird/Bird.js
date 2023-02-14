import React from "react";

import bird from '../../assets/bird.png'
import './style.css'

function Bird({size = 30, top, left = 0}){

    return (
        <div
            className='Bird'
            style={{
                height: size,
                width: size,
                top: top,
                left: left
            }}
        >
            Bird
            {/* <img src={bird} alt="Bird"/> */}
        </div>
    )
}

export default Bird