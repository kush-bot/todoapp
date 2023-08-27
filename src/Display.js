import React from "react";
import './display.css'
import Delete from './Delete'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useEffect } from "react";


const DispalyData = ({data}) => {
    console.log("hello")
    const [deleteMessage,setDeleteMessage]=useState(null)
  

  const handleclick = (id) =>{
    console.log("id is "+id)
    fetch('http://localhost:8000/data/'+id,{
        method:'DELETE'
        
    })
    .then(()=>{
        console.log("")
    })

  }

    return (  
        <div className="preview container mx-auto  ">
            {
                data.map((data)=>(
                    <div className="each-data top-5 shadow  hover:shadow-xl border hover:border-red-500 justify-center m-4 items-center  w-90 p-5" key={data.id}>
                        <Link to={`/details/${data.id}`}>
                        <h1 className="text-2xl uppercase text-red-500">{data.title}</h1>
                        </Link>
                        <h5>{data.date}</h5>
                        <p>{data.body}</p>
                        <div className="flex justify-end">
                            <Delete onClick={()=>{handleclick(data.id)}}/>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default DispalyData;