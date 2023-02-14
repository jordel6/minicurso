import React from "react"

function Ground({width, height, leftCrop, image}) {
    return (
        <div
            className='Ground'
            style={{
                width: width,
                height: height,
                left: -leftCrop,
                //backgroundImage: url(image),
            }}
        />
    )
}

export default Ground;