import React from "react"
import Animation from "./animation"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video texture ">
    {" "}
    <div>
      <Animation></Animation>
    </div>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      loading="eager"
      width="100%"
      height="200px"
      className=" border border-danger"
    />
  </div>
)

export default Video
