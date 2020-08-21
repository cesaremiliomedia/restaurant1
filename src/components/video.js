import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video texture ">
    {" "}
    <h1
      className="pnkcol"
      style={{
        fontsize: "24px",
        fontFamily: "Sacramento",
        color: "#F24E29",
        marginTop: "0px",
      }}
    >
      Tacos con Amor
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
