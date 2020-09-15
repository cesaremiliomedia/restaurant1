import React from "react"

import { toast } from "react-toastify"
export default function Tacos({ item }) {
  const { img1, img2, img3, img4, img5 } = item
  const name = "carusel" + `${item.item}`
  const hashName = "#" + `${name}`
  const toa = () => toast.success("added to cart")
  return (
    <div className=" texture card bg-success text-center p-4">
      <div
        style={{ minHeight: "200px" }}
        id={name}
        className="carousel slide"
        data-ride="carousel"
      >
        <h1
          className="orgcol"
          style={{
            fontWeight: "800",
            textShadow: "0 0 5px yellow, 1px 1px 1px black",
          }}
        >
          {item.item}
        </h1>
        <div className="carousel-inner w-100">
          <div className="carousel-item active">
            <img
              id="slide-1"
              src={img1.url}
              className="d-block w-100 imgfxs"
              alt="slide-1"
            ></img>
            <h1 style={{ fontSize: "15px" }}>{img1.name}</h1>
            <p
              style={{ marginTop: "10px", fontWeight: "600", color: "yellow" }}
            >
              {img1.price}
            </p>
          </div>
          <div id="slide-2" className="carousel-item ">
            <img
              src={img2.url}
              className="imgfxs d-block w-100"
              alt="slide-2"
            ></img>
            <h1 style={{ fontSize: "15px" }}>{img2.name}</h1>{" "}
            <p
              style={{ marginTop: "10px", fontWeight: "600", color: "yellow" }}
            >
              {img2.price}
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="px-5 imgfxs d-block w-100"
              src={img3.url}
              alt="slide-3"
            ></img>
            <h1 style={{ fontSize: "15px" }}> {img3.name}</h1>{" "}
            <p
              style={{ marginTop: "10px", fontWeight: "600", color: "yellow" }}
            >
              {img3.price}
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="imgfxs d-block w-100"
              src={img4.url}
              alt="slide-4"
            ></img>
            <h1 style={{ fontSize: "15px" }}>{img4.name}</h1>{" "}
            <p
              style={{ marginTop: "10px", fontWeight: "600", color: "yellow" }}
            >
              {img4.price}
            </p>
          </div>
          <div className="carousel-item">
            <img
              className="imgfxs d-block w-100"
              src={img5.url}
              alt="slide-5"
            ></img>
            <h1 style={{ fontSize: "15px" }}>{img5.name}</h1>{" "}
            <p
              style={{ marginTop: "10px", fontWeight: "600", color: "yellow" }}
            >
              {img5.price}
            </p>
          </div>
        </div>
        <a
          className=" carousel-control-prev"
          href={hashName}
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
          href={hashName}
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
      <p style={{ marginTop: "10px", fontWeight: "600", color: "yellow" }}>
        {item.price}
      </p>
      <p
        style={{
          marginTop: "-20px",
          padding: "10px",
          fontWeight: "600",
          color: "yellow",
        }}
      >
        {item.options}
      </p>
      <p
        style={{
          marginTop: "-30px",
          fontSize: "10px",
          fontWeight: "600",
          color: "black",
        }}
      >
        {item.info}
      </p>{" "}
      <div className="mx-auto">
        <button
          style={{ maxWidth: "200px" }}
          className=" btn btn-primary btn-block btn-lg"
          onClick={toa}
        >
          add to cart
        </button>
      </div>
    </div>
  )
}
