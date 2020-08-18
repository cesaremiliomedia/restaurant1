import VisibilitySensor from "react-visibility-sensor"
import React from "react"
import { Spring } from "react-spring/renderprops"

export default function ({ imgUrl, info }) {
  return (
    <div style={{ display: "block", minHeight: "150px" }}>
      <div className="row w-100 d-flex justify-content-center text-center mx-auto  ">
        <div className="col  ">
          <VisibilitySensor partialVisibility offset={{ top: 0 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <Spring
                    config={{ delay: 275 }}
                    from={{
                      opacity: 0,
                      transform: "translate(-10px, 0)",
                    }}
                    to={{
                      opacity: 1,
                      transform: "translate(0px, 0)",
                      display: "flex",
                      minHeight: "100%",
                      alignItems: "center",
                    }}
                  >
                    {props => (
                      <div style={props}>
                        <p
                          style={{
                            left: "0px",

                            lineHeight: "12px",
                            fontSize: "10px",
                            fontWeight: "550",
                          }}
                          className="  text-justify mw-80 rounded"
                        >
                          {info}
                        </p>
                      </div>
                    )}
                  </Spring>
                ) : (
                  <div
                    className="w-100 container"
                    style={{ visibility: "hidden" }}
                  >
                    s
                  </div>
                )}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div
          className="col d-flex text-center justify-content-center   "
          style={{
            lineHeight: "8px",
          }}
        >
          <VisibilitySensor partialVisibility offset={{ top: 0 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <Spring
                    config={{ delay: 275 }}
                    from={{
                      opacity: 0,
                      transform: "translate(10px, 0)",
                    }}
                    to={{
                      opacity: 1,
                      transform: "translate(0px, 0)",
                    }}
                  >
                    {props => (
                      <div style={props}>
                        <img
                          className="w-100 rounded-circle "
                          src={imgUrl}
                          alt=""
                        />
                      </div>
                    )}
                  </Spring>
                ) : (
                  <div
                    className="w-100 container "
                    style={{ visibility: "hidden" }}
                  >
                    {" "}
                    s
                  </div>
                )}
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  )
}
