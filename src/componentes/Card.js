import React from 'react'

function Card({ src, title, info}) {
  return (
      <div className="card">
          <img src={src}/>
          <h2>{title}</h2>
          <h4>{ info}</h4>
    </div>
  )
}

export default Card