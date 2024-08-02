import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';



const Card=(props)=>
{let courses=props.courses;
   
    let liked = props.liked;
    let setliked = props.setliked;
    function clickHandler() {
       
        if(liked.includes(courses.id)) {
       
            setliked( (prev) => prev.filter((cid)=> (cid !== courses.id) )  );
            toast.warning("like removed");
        }
        else {
            
            if(liked.length === 0 ) {
                setliked([courses.id]);
            }
            else {
                
               setliked((prev) => [...prev, courses.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div  className='w-[300px] bg-black bg-opacity-50 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={courses.image.url} />
            <div  className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                {
                        liked.includes(courses.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
            
        </div>
        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{courses.title}</p>
            <p className='mt-2 text-white'>{ courses.description.length >100 ? 
                        (courses.description.substr(0,100)) + "..." :
                        (courses.description)}</p>
        </div>
        </div>

    );
}
export default Card;