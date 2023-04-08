import "./Carousel.css"
import CarouselCard from "./CarouselCard"
import { useState, useEffect } from "react"

function Carousel(){

    const cardsCollection = [
        {
            image: "",
            name:"Hannah Schmitt",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        },
        {
            image: "",
            name:"Hannah Schmitt",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        },
        {
            image: "",
            name:"Hannah Schmitt",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        }
    ]

    const [carouselRotation, serCarouselRotation] = useState(0)

    const rotation = (n,m) =>{
        let result = n % m
        return result >=0 ? result : result % m;
    }

    return(
        <div className="carousel">
            <h1>What Our Clients Say About Us</h1> 
            <button className="carousel-btn left-btn click"> {`<`} </button>
            <button className="carousel-btn right-btn click"> {`>`} </button>

            {cardsCollection.map((card,index)=>{
                const cardLeft = rotation(carouselRotation - 1,cardsCollection.length)
                const cardRight = rotation(carouselRotation + 1,cardsCollection.length)

                let className = "";

                if(index === carouselRotation){
                    className = "cart-active"
                }else if(index === cardRight){
                    className = "card-right"
                }else{
                    className = "card-left"
                }

                return(<CarouselCard 
                    image={card.image} 
                    name={card.name} 
                    job={card.jobTitle} 
                    description={card.description}
                    className={className}
                />)
            })}
            {/* <p className="card card-active"> Carousel 1</p>
            <p className="card card-left"> Carousel 2</p>
            <p className="card card-right"> Carousel 3</p> */}
        </div>
    )
}
export default Carousel