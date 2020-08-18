import React from "react"
import { Spring } from "react-spring/renderprops"
import { Dialog } from "@reach/dialog"
import { toast } from "react-toastify"
import "@reach/dialog/styles.css"
export default function FixedMenu() {
  const [showDialog, setShowDialog] = React.useState(false)
  const vospen = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  return (
    <div>
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          height: "50px",
          margin: "auto",
          width: "100%",
          maxWidth: "375px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="d-flex navbar mx-auto"
          style={{
            justifyContent: "space-evenly",
          }}
        >
          <a href="#menu">
            <i className="fa-x px-2 fa fa-map-marker" aria-hidden="true">
              {""}
            </i>
            <span>See Menu</span>
          </a>

          <a href="tel:123-456-7890">
            <i className="fa-x px-2 fa fa-cutlery" aria-hidden="true">
              {""}
            </i>
            <span>Place order</span>
          </a>
        </div>
      </div>
      <Dialog
        style={{
          background: "black",
          zIndex: "10",
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
            height: "400px",
          }}
        >
          {props => (
            <div>
              <div style={props} className="d-block mw-100">
                <p className="h6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  nesciunt totam similique rem mollitia quos architecto veniam.
                  Odit ipsa corrupti animi rerum, eius tempore, inventore
                  assumenda sunt voluptate nisi odio.
                </p>
                <p className="h6 ">ADDRESS 1</p>
                <p className="h6 ">ADDRESS 2</p>
              </div>
            </div>
          )}
        </Spring>
      </Dialog>
    </div>
  )
}
