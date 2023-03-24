import { useState, useEffect } from "react"
import axios from "axios"

export default function Company() {
    const [cards, setCards] = useState()
    const User = JSON.parse(localStorage.getItem('user'))
    const user_id = User.id

    useEffect(() => {
        axios.post("/api/cards/T", {
            user_ID: user_id
        })
        .then((response) => {
            setCards(response.data)
            console.log(response.data)       
        })
    }, [])

    //   return <p>Here is a definition</p>  ;
      
}

// const companyDetails = ({comapny}) => {
//     return (
//         <div>
//             <p>{comapny.companyName}</p>
//         </div>
//     )
// }
// export default companyDetails