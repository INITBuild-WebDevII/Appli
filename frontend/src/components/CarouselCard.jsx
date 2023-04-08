import "./CarouselCard.css"
import { useState } from "react"

function CarouselCard(prop){

    return(
        <div className="carousel-cards">
            <div className="purple-carousel">
            </div>
            <div className="main-carousel `{className}`">
                <img src="" alt={prop.image} />
                <h3>{prop.name}</h3>
                <p>{prop.job}</p>
                <p>{prop.description}</p>
            </div>
        </div>
    )
}
export default CarouselCard