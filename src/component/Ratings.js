import React, {useState} from 'react'
import axios from 'axios'
import {FaStar} from"react-icons/fa"
import "./ratings.css"
export default function Ratings() {
    const [ratingValue, setratingValue] = useState(0);
   
    
    return (
        <div>
            {[...Array(5)].map((ele,i) =>{
            const rating = i+1;
           return( <label><input type="radio" value={rating} 
           onClick={() =>{setratingValue(rating) ; axios.post("url", ratingValue)}}/>
               <FaStar size={100} color={ ratingValue <  rating ? "#EECBF6":"#B11ACF" }
               /></label> )})}
               <h1>{ratingValue}</h1>
               
        </div>
    )
}
