import React, {useState} from 'react'
import axios from 'axios'
import {FaStar} from"react-icons/fa"
import "./ratings.css"
export default function Ratings() {
    const [ratingValue, setratingValue] = useState(0);
    //dummy posting url
    const url = "facebook.com"
    
   
    
    return (
        <div className="wrapper">
            {[...Array(5)].map((ele,i) =>{
            const rating = i+1;
           return( <div style={{display: 'inline-block'}} onMouseEnter={(e) => {
            
           setratingValue(rating)
           }} onMouseLeave={()=> setratingValue(0)} onClick={axios.post(url, ratingValue)} >
           <label><input type="radio" value={rating} 
            />
               <FaStar className="star" size={100} color={ ratingValue <  rating ? "#EECBF6":"#B11ACF" }
               /></label> </div>)})}
               <h1>{ratingValue}</h1>
               
        </div>
    )
}
