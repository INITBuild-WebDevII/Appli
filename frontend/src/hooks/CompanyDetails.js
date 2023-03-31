import { useState, useEffect } from "react"
import axios from "axios"

export default function Company() {
    const [cards, setCards] = useState()
    var User;
    var user_id;
    if (JSON.parse(localStorage.getItem('user')) === null) {
      User = JSON.parse(sessionStorage.getItem('user'))
      user_id = User.id
    } else {
      User = JSON.parse(localStorage.getItem('user')) 
      user_id = User.id
    }

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