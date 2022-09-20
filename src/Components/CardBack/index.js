import React from 'react'
import bg from "../../images/bg-card-back.png"
import "./CardBack.css"

function CardBack({children = "000"}) {
  return (
    <figure className="cardBack card">
        <img src={bg} alt="" className="cardBack__img card__img"/>
        <div className="card__container">
          <p className="cardBack__number">{children}</p>
        </div>
    </figure>
  )
}

export default CardBack