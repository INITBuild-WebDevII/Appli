import "./CarouselItem.css"
import { useState } from "react"

function CarouselItem(prop){
    const newName = "card " + `${prop.class}`

    return(
        <div className="carousel-cards">
            <div className={"card " + prop.class}>
            <div className={"card purple purple-" + prop.class}></div>
            <div className={"card black black-" + prop.class}></div>
                <img src="" alt={prop.image} />
                <h3 className="user-name">{prop.name}</h3>
                <p className="user-job-title">{prop.job}</p>
                <p>{prop.description}</p>
            </div>
        </div>
    )
}
export default CarouselItem