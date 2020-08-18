import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video texture p-4">
    {" "}
    <h1
      style={{
        fontsize: "18px",
        fontFamily: "titan one",

        marginTop: "0px",
      }}
    >
      Tacos
    </h1>
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
