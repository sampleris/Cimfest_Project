import React from 'react'
 import BgImg from './images/'
const VideoComponent = () => {
  return (
    <div>
      <video autoPlay muted loop className="background-video">
        <source src={BgImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoComponent
