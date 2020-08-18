import React from "react"
import { Spring } from "react-spring/renderprops"
import { Dialog } from "@reach/dialog"
import { toast } from "react-toastify"
import "@reach/dialog/styles.css"
export default function SecondPage({ imgUrl }) {
  const [showDialog, setShowDialog] = React.useState(false)
  const vospen = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  const toa = () => toast.success("added to cart")
  return (
    <div>
      <div className="p-2 m-2 mt-4 ">
        <img
          style={{
            position: "relative",
            maxWidth: "100%",
            minWidth: "90px",
            borderWidth: "10px",
            objectFit: "contain",
          }}
          onClick={vospen}
          src={imgUrl.url}
          alt=""
          className="rounded-circle border border-info"
        />
        <p style={{ textAlign: "center", fontSize: "9px" }}>{imgUrl.item}</p>
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
              <img style={props} src={imgUrl.url} alt="" className="rounded" />
              <h2 style={props}>Price: {imgUrl.price}</h2>
              <div style={props}>
                <h2
                  className="text-wrap mx-auto"
                  style={{ fontSize: "12px", width: "50%" }}
                >
                  {imgUrl.info}
                </h2>
              </div>

              <div className="d-block mw-100">
                <button
                  style={props}
                  className="btn btn-primary btn-block btn-lg"
                  onClick={toa}
                >
                  add to cart
                </button>
                <button
                  style={props}
                  className=" w-20 btn btn-danger btn-sm mt-4"
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
