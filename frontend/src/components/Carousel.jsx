import "./Carousel.css"
import CarouselItem from "./CarouselItem"
import { useState, useEffect } from "react"
import user1 from "../assets/ellipse16.png"
import User2 from "../assets/Ellipse17.png"
import User3 from "../assets/Ellipse18.png"
function Carousel(){

    const cardsCollection = [
        {
            image: user1,
            name:"Nicole",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        },
        {
            image: "",
            name:"Rafael",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        },
        {
            image: "",
            name:"Bruna",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        }
    ]
    const [activeIndex, setActiveIndex] = useState(1)
    
    const updateIndex = (newIndex) => {
        newIndex = newIndex % cardsCollection.length

        if (newIndex < 0){
            newIndex = cardsCollection.length - 1
        }else if (newIndex > cardsCollection.length - 1){
            newIndex = 0
        }
        return newIndex
    }

    return(
        <div className="carousel">
            <h1>What Our Clients Say About Us</h1> 
            <button onClick={()=>{setActiveIndex(updateIndex(activeIndex - 1))}} className="carousel-btn left-btn click"> {`<`} </button>
            <button onClick={()=>{setActiveIndex(updateIndex(activeIndex + 1))}} className="carousel-btn right-btn click"> {`>`} </button>

            {cardsCollection.map((card, index)=>{
                let newName = ""
                if(index === activeIndex){
                    newName = "active-card"
                }else if (index === updateIndex(activeIndex - 1)){
                    newName = "card-left"
                }else if (index === updateIndex(activeIndex + 1)){
                    newName = "card-right"
                }
                console.log(activeIndex)
                return(<CarouselItem
                    image={card.image} 
                    name={card.name} 
                    job={card.jobTitle} 
                    description={card.description}
                    class={newName}
                />)
            })}
        </div>
    )
}
export default Carousel