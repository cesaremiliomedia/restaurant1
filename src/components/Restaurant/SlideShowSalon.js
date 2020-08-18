import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import '../styles.css'

const slides = [
  {
    id: 0,
    url:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
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
      {/* <div style={{ zIndex: '1000' }} className="hero-text ">
        <h1>Rareness</h1>
        <p>100% Authentic Gear</p>
      </div> */}
    </animated.div>
  ))
}
