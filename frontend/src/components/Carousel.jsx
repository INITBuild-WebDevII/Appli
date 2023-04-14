import "./Carousel.css"
import { useState, useEffect } from "react"
import User1 from "../assets/ellipse16.png"
import User2 from "../assets/Ellipse17.png"
import User3 from "../assets/Ellipse18.png"
function Carousel(){

    const cardsCollection = [
        {
            image: User1,
            name:"Nicole",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        },
        {
            image: User2,
            name:"Rafael",
            jobTitle:"Lead Designer",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni iste expedita recusandae nihil itaque ipsa? Commodi sint libero fugit dolorem molestiae nostrum quo voluptate possimus, saepe et? Quaerat, impedit labore."
        },
        {
            image: User3,
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
                return(
                    <div className="carousel-cards">
                        <div className={"card " + newName}>
                            <div className={"card purple purple-" + newName}></div>
                            <div className={"card black black-" + newName}></div>
                            <img className="user-img" src={card.image} alt="" />
                            <div className="carousel-text">
                                <h3 className="user-name">{card.name}</h3>
                                <p className="user-job-title">{card.job}</p>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Carousel