import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/Cards';
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import {filterdata,apiurl} from './Data';
  import {toast} from "react-toastify";
  import Spinner from "./Components/Spinner";
function App() {
 
  const[courses,setcourse]=useState({});
  const [loading, setloading] = useState(true);
  const [category, setCategory] = useState(filterdata[0].title);

  
  
   async function fetchdata(){
    setloading(true);
    try{
  const res=await fetch(apiurl);
  const data1=await res.json();
  console.log(data1);
  setcourse(data1.data);
    }
    catch(err){
       toast.err("something went wrong");

    }
    setloading(false);
  }
  useEffect(()=>{
    fetchdata();
  },[]);

  return (
 <div className='min-h-screen flex flex-col bg-blue-950'> 
   
      <Navbar/>
      <Filter filterdata={filterdata} category={category} setCategory={setCategory}/>
      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        (courses.length === 0 || Object.keys(courses).length === 0) ? 
        (<div className='font-bold text-center text-3xl text-white '>No Courses Found</div>) : 
        (loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>))
        }
      </div>
       
    </div>
  )
}

export default App;
