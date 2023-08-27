import React from "react";
import './display.css'
const DispalyData = ({data}) => {
    
    console.log(data)
  
    return (  
        <div className="main flex ">
            {
                data.map((dataval)=>(
                    <div className=" items-start flex flex-col border m-5 w-90 w-auto top-3"key={dataval.id}>
                        <h1 className="font-bold left-0 font-3xl p-18 uppercase text-red-600 p-5">{dataval.title}</h1>
                        <h3 className="px-18">{dataval.date}</h3>
                        <p className="px-18">{dataval.body}</p>
                        <buton>delete</buton>
                        
                    </div>
                ))
            }
            

        </div>
    );
}
 
export default DispalyData;