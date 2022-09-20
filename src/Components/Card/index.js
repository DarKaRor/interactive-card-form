import React from "react"
import "./Card.css"

function Card({children}){
    return(
        <figure className="cardBox">
            {children}
        </figure>
    )
}

export default Card;