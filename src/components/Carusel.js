import React from "react"

export default function Carusel({ imgUrl1, imgUrl2, imgUrl3 }) {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="slide-1" data-slide-to="0" className="active"></li>
          <li data-target="slide-2" data-slide-to="1"></li>
          <li data-target="slide-3" data-slide-to="2"></li>
        </ol>
        <div style={{}} className="carousel-inner w-100">
          <div className="carousel-item active">
            <img
              style={{ maxHeight: "200px", objectFit: "cover" }}
              id="slide-1"
              src={imgUrl1}
              className="d-block w-100"
              alt="slide-1"
            ></img>
          </div>
          <div id="slide-2" className="carousel-item ">
            <img
              style={{ maxHeight: "200px", objectFit: "cover" }}
              src={imgUrl2}
              className="d-block w-100"
              alt="slide-2"
            ></img>
          </div>
          <div className="carousel-item">
            <img
              style={{ maxHeight: "200px", objectFit: "cover" }}
              className="d-block w-100"
              src={imgUrl3}
              alt="slide-3"
            ></img>
          </div>
        </div>{" "}
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
