import { render } from "react-dom"
import React, { useState, useEffect } from "react"
import { useTransition, animated, config } from "react-spring"
import "../components/styles.css"

const slides = [
  {
    id: 0,
    url:
      "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1564982759617-29646f69025c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1582315665834-b0302c5a6b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1035&q=80",
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/photo-1528493751086-d8e6d9249f9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1094&q=80",
  },
]

export default function App() {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(
    () => void setInterval(() => set(state => (state + 1) % 4), 2000),
    []
  )
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg  "
      style={{
        ...props,
        backgroundImage: `url(${item.url}`,
      }}
    >
      <div style={{ zIndex: "1000" }} className="hero-text ">
        <h1>Rareness</h1>
        <p>100% Authentic Gear</p>
      </div>
    </animated.div>
  ))
}
