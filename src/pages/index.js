import React, { Component } from "react"
import Layout from "../components/layout2"

import Tacos from "../components/Restaurant/tacos"
import { Menu2, Menu3, sides } from "../products/Menu/RestMenu"
import HeroImage from "../components/HeroImage"
import InfoComp from "../components/infoComp"
import InfoComp2 from "../components/infoComp2"
import FixedMenu from "../components/FixedMenu"
import SlideShow from "../components/SlideShow"
import ModalObject from "../components/ModalObject"
import Video from "../components/video"
import VisibilitySensor from "react-visibility-sensor"
import Animation from "../components/animation"
import { Spring } from "react-spring/renderprops"
import { ToastContainer } from "react-toastify"

export default class Page extends Component {
  render() {
    const url =
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
    const url2 =
      "https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    const url3 = {
      url:
        "https://images.unsplash.com/photo-1560215987-307b2039a677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=465&q=80",
      price: "$8",
      info: "SPECIAL #1 ",
    }
    const url4 = {
      url:
        "https://images.unsplash.com/photo-1582234383980-59933689fb44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      price: "$5",
      info: "SPECIAL #2 ",
    }
    const url5 = {
      url:
        "https://images.unsplash.com/photo-1582236530048-e4a7f33718d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      price: "$15",
      info: "SPECIAL #3",
    }
    const heroInfo = {
      title: "Tacos",
      message: "made with amor",
      action: "see menu",
    }

    return (
      <Layout>
        <ToastContainer />
        <div></div>

        <Video videoSrcURL="https://www.youtube.com/embed/k2qist_IxZI"></Video>
        <div
          style={{
            display: "block",
            position: "relative",
            height: "42vh",
            objectFit: "cover",
            margin: "0px 0px",
          }}
        >
          <HeroImage info={heroInfo} imgUrl={url2} />
        </div>
        <div style={{ minHeight: "200px" }}>
          <VisibilitySensor partialVisibility offset={{ top: 0 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? (
                  <Spring
                    config={{ delay: 300 }}
                    from={{
                      opacity: 0,
                    }}
                    to={{
                      opacity: 1,
                    }}
                  >
                    {props => (
                      <div style={props}>
                        <h1
                          className="pnkcol"
                          style={{
                            fontsize: "20px",
                            fontWeight: "700",
                            letterSpacing: "3px",
                            marginTop: "-20px",
                          }}
                        >
                          About this site
                        </h1>
                        <p
                          style={{
                            ...props,
                            lineHeight: "1.5em",
                            padding: "0px 30px",
                            fontSize: "14px",
                            textAlign: "center",
                            fontWeight: "550",
                          }}
                        >
                          {Menu3.info6}
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

        <InfoComp imgUrl={url2} info={Menu3.info3} />

        <div style={{ paddingBottom: "30px" }} className="">
          {" "}
          <InfoComp2 info={Menu3.info4} imgUrl={url} />
        </div>

        <div className=" m-2" style={{ position: "relative", height: "250px" }}>
          <SlideShow />
        </div>
        <h1 style={{ color: "#F2A413" }} className="text-lowercase">
          Specials!
        </h1>
        <div
          id="menu"
          style={{
            display: "flex",
            width: "100%",
            marginTop: "-20px",
          }}
        >
          <ModalObject imgUrl={url3} />
          <ModalObject imgUrl={url4} />
          <ModalObject imgUrl={url5} />
        </div>

        <Tacos item={Menu2}></Tacos>
        <Tacos item={Menu3}></Tacos>
        <Tacos item={sides}></Tacos>

        <FixedMenu />
        <div style={{ color: "white" }} id="accordion">
          <div style={{ background: "#28a745" }} className="card ">
            <div
              style={{ maxHeight: "50px" }}
              className="card-header"
              id="headingOne"
            >
              <h5 className=" mb-0">
                <a
                  style={{
                    color: "white",
                    maxHeight: "50px",
                    fontSize: "10px",
                    padding: "0",
                  }}
                  className=" btn btn-link "
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Hours of Operation
                </a>{" "}
                <div
                  aria-controls="collapseOne"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  className="float-right "
                >
                  {" "}
                  <i className="fa fa-plus-square" aria-hidden="true"></i>
                </div>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body text-gray d-flex flex-column">
                <div className="text-center ">
                  <p className="abs">HOURS</p>
                  <p className="abs">SUNDAYS: 11AM-3PM</p>
                  <p className="abs marfx">MON-SAT: 8AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "#28a745", maxWidth: "" }} className="card">
            <div
              style={{ background: "#28a745" }}
              className="card-header"
              id="headingTwo"
            >
              <h5 className="mb-0">
                <a
                  style={{ maxHeight: "50px", fontSize: "10px", padding: "0" }}
                  className="btn btn-link collapsed "
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Location
                </a>{" "}
                <div
                  aria-controls="collapseTwo"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  className="float-right "
                >
                  {" "}
                  <i className="fa fa-plus-square" aria-hidden="true"></i>
                </div>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <a className="card-body text-center ">
                {" "}
                <p
                  className="text-center mx-auto abs"
                  style={{ maxWidth: "150px", lineHeight: "15px" }}
                >
                  1000 San Marcos St. Austin, Tx
                </p>
              </a>
            </div>
          </div>
        </div>
        <footer id="footer" className="pb-1 text-center d-flex mx-auto">
          <p
            style={{ lineHeight: "20px", width: "100%" }}
            className="pb-5 copyright "
          >
            &copy; All Rights Reserved CesaremilioMedia
          </p>
        </footer>
      </Layout>
    )
  }
}
