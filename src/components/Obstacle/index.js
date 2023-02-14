import React from "react"

function Obstacle({width, height, left, top}) {
    return (
        <div
            className='Obstacle'
            style={{
                width: width,
                height: height,
                left: left,
                top: top,
            }}
        />
    )
}