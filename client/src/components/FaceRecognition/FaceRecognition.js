import React from 'react'

const FaceRecognition = ({image}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={image} alt="submitted" width="500px" height="auto"></img>
            </div>
        </div>
    )
}

export default FaceRecognition