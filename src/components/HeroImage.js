import React from 'react'

export default function HeroImage({ imgUrl, info }) {
  return (
    <div>
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div
          style={{ position: 'absolute', zIndex: '0' }}
          className="hero-text"
        >
          <h1>{info.title}</h1>
          <p>{info.message}</p>
          <button className="d-block mw-20">{info.action}</button>
        </div>
      </div>
    </div>
  )
}
