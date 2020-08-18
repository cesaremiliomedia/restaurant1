import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import '../components/styles.css'

const slides = [
  {
    id: 0,
    url:
      'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  },
  {
    id: 1,
    url:
      'https://images.unsplash.com/photo-1564767655658-4e6b365884ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 2,
    url:
      'https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1006&q=80',
  },
  {
    id: 3,
    url:
      'https://images.unsplash.com/photo-1579888944880-d98341245702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
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
    />
  ))
}
