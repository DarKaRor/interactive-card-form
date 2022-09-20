import React from 'react'
import bg from "../../images/bg-card-front.png"
import icon from "../../images/card-logo.svg"
import "./CardFront.css"

function CardFront(
	{
		number = "0000 0000 0000 0000",
		name = "Jane Appleseed",
		month = "00",
		year = "00"
	}) {

	let newNumber = number.replace(/\s/g,'');
	number = "";
	for(let i = 0 ; i < 4; i++)	number+= newNumber.slice(i * 4, (i * 4) + 4) + " ";
	return (
		<figure className="cardFront card">
			<img src={bg} alt="Card Front" className="cardFront__img card__img" />
			<div className="card__container">
				<img src={icon} alt="logo" className="cardFront__icon" />
				<div className="cardFront__info">
					<p className="cardFront__number">{number}</p>
					<div className="cardFront__mini">
						<p className="cardFront__name">{name}</p>
						<p className="cardFront__date">{month}/{year}</p>
					</div>
				</div>
			</div>
		</figure>
	)
}

export default CardFront