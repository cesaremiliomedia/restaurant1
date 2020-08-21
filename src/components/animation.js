import React from "react"

import Lottie from "react-lottie"
import animation from "../animations/data69.json"

export default class LottieControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: true, isPaused: false, setDirection: 1 }
  }

  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto',
    // }

    const defaultOptions = {
      loop: false,
      autoplay: true,
      speed: 1,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <div style={{ margin: "-200px 0px", position: "relative", zIndex: 1 }}>
        <Lottie
          options={defaultOptions}
          width={"100%"}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
          direction={this.state.setDirection}
        />
      </div>
    )
  }
}

// <button
//   style={buttonStyle}
//   onClick={() => this.setState({ setDirection: -1 })}
// >
//   stop
// </button>
// <button
// //   style={buttonStyle}
// //   onClick={() =>
// //     this.setState({
// //       isStopped: false,
// //       setDirection: 1,
// //       isPaused: false,
// //     })
// //   }
// // >
//   play
// </button>
// <button
//   style={buttonStyle}
//   onClick={() => this.setState({ isPaused: true })}
// >
//   pause
// </button>
