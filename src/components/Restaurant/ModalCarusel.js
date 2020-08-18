import React from "react"
import { Spring } from "react-spring/renderprops"
import { Dialog } from "@reach/dialog"
import { toast } from "react-toastify"
import "@reach/dialog/styles.css"
import Carusel from "../Carusel"

export default function SecondPage({ imgUrl }) {
  const [showDialog, setShowDialog] = React.useState(false)
  const vospen = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const toa = () => toast.success("appointment booked!")
  return (
    <div>
      <div className="p-2 m-2 mt-4 ">
        <img
          style={{
            position: "relative",
            maxWidth: "100%",
            minWidth: "120px",
            borderWidth: "10px",
            objectFit: "contain",
          }}
          onClick={vospen}
          src={imgUrl.url}
          alt=""
          className="rounded-circle border border-info"
        />
        <div
          className=" align-middle"
          style={{
            fontFamily: "Didot",
            textAlign: "center",
            fontSize: "12px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          {imgUrl.item}
        </div>
      </div>

      <Dialog
        style={{
          background: "black",

          textAlign: "center",
        }}
        isOpen={showDialog}
        onDismiss={close}
      >
        <Spring
          from={{
            opacity: 0,
            transform: "translate(-10px, 0)",
          }}
          to={{
            opacity: 1,
            transform: "translate(0px, 0)",
            position: "relative",
            maxWidth: "100%",
          }}
        >
          {props => (
            <div>
              <div>
                <Carusel
                  imgUrl1={imgUrl.url1}
                  imgUrl2={imgUrl.url2}
                  imgUrl3={imgUrl.url3}
                />
              </div>
              <div style={props} className="mt-3">
                <h3
                  style={{
                    textTransform: "none",
                    fontFamily: "Didot",
                    fontSize: "16px",
                  }}
                >
                  Price: {imgUrl.price}
                </h3>
              </div>

              <div style={props}>
                <p
                  className="mx-auto"
                  style={{
                    fontSize: "14px",
                    width: "80%",
                    fontFamily: "Boudini",
                  }}
                >
                  {imgUrl.info}
                </p>
              </div>

              <div style={props} className="d-sm-block mw-100">
                <button
                  style={{
                    height: "2rem",
                    lineHeight: "10px",
                    fontSize: "10px",
                  }}
                  className="btn-sm btn-primary mw-80 mx-auto d-block"
                >
                  Book APPOINTMENT
                </button>
                <button
                  style={{ height: "1.5rem", fontSize: "10px" }}
                  className="  btn btn-danger btn-sm "
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Spring>
      </Dialog>
    </div>
  )
}
