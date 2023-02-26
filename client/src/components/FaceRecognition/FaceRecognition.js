import React from 'react'

const FaceRecognition = ({image, box}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img src={image} alt="submitted" width="500px" height="auto" id="targetImage"></img>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

                </div>
            </div>
        </div>
    )
}

export default FaceRecognition