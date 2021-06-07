import React, {useState} from 'react'
import axios from 'axios'
import {FaStar} from"react-icons/fa"
import "./ratings.css"
export default function Ratings() {
    const [ratingValue, setratingValue] = useState({rating: 0 });
    //dummy posting url
    const url = "facebook.com"
    

    
   
    
    return (
        <div className="wrapper">
           
               <input name="star" type="radio" value={5} id="1"  onChange={(e)=>{ setratingValue({rating: e.target.value}) ;
            axios.post(url, ratingValue)}}/>
            <label for="1">
               <FaStar size={100} />
            </label>
            

               <input name="star" type="radio" value={4} id="2" onChange={(e)=>{ setratingValue({rating: e.target.value}) ;
            axios.post(url, ratingValue)}}/>
               <label for="2">
               <FaStar size={100} />
            </label>
            
               <input name="star" type="radio" value={3} id="3" onChange={(e)=>{ setratingValue({rating: e.target.value}) ;
            axios.post(url, ratingValue)}}/>
               <label for="3">
               <FaStar size={100} />
            </label>
           
               <input name="star" type="radio" value={2} id="4" onChange={(e)=>{ setratingValue({rating: e.target.value}) ;
            axios.post(url, ratingValue)}} />
               <label for="4">
               <FaStar size={100} />
            </label>
            
               <input name="star" type="radio" value={1} id="5" onChange={(e)=>{ setratingValue({rating: e.target.value}) ;
            axios.post(url, ratingValue)}}/>
               <label for="5">
               <FaStar size={100} />
            </label> 
            <h1>{ratingValue.rating}</h1>
           
               
        </div>
      
    )
}
