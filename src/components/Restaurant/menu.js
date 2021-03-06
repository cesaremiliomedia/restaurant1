import Tacos from "./tacos"
import { Menu2, Menu3, sides } from "../../products/Menu/RestMenu"
import "../styles.css"

import React, { useState, useCallback } from "react"
import { useTransition, animated } from "react-spring"

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Tacos item={Menu2}></Tacos>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Tacos item={Menu3}></Tacos>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Tacos item={sides}></Tacos>
    </animated.div>
  ),
]

export default function Menu() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <div>
      <div className="bg-success texture simple-trans-main  ">
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props}></Page>
        })}
        <nav>
          <ul
            style={{
              whiteSpace: "nowrap",
              fontFamily: "sacramento",
              fontWeight: "700",
            }}
          >
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={() => set(0)}
              style={{ textTransform: "none" }}
            >
              Tacos
            </button>
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={() => set(1)}
              style={{ textTransform: "none" }}
            >
              Bowls
            </button>
            <button
              type="button"
              class="btn btn-primary btn-lg"
              onClick={() => set(2)}
              style={{ textTransform: "none" }}
            >
              Sides
            </button>
          </ul>
        </nav>
      </div>
    </div>
  )
}
