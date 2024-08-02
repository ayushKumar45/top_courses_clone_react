import React from "react";
import Card from "./Card";
import { useState } from 'react';
const Cards=(props)=>
{let courses=props.courses;
    let category = props.category;
    const [liked,setliked] = useState([]);
function getcourse()
{ if(category==="All")
{
    let allcourses=[];console.log("cards");
    Object.values(courses).forEach(array => {
        array.forEach((course1)=>{
            allcourses.push(course1);
        })
        
    })
    return allcourses;
}
else{
    return courses[category]; 
}
}


    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
             
         {
            getcourse().map((courses)=>(
              
                <Card key={courses.id} courses={courses} liked={liked} setliked={setliked}/>
    
            ))
           
         }
        </div>
    );
}
export default Cards;