import "./CarouselItem.css"
import { useState } from "react"

function CarouselItem(prop){
    const newName = "card " + `${prop.class}`

    return(
        <div className="carousel-cards">
            <div className={"card " + prop.class}>
            <div className={"card purple purple-" + prop.class}></div>
            <div className="card black-carousel"></div>
                <img src="" alt={prop.image} />
                <h3>{prop.name}</h3>
                <p>{prop.job}</p>
                <p>{prop.description}</p>
            </div>
        </div>
    )
}
export default CarouselItem