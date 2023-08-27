import { useEffect, useState } from "react";

const useFetch = (url) => {
    console.log(url)
    const [data,setData]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const [error,setError]=useState(null)
    

useEffect(()=>{
    fetch(url)
    .then(res=>{
        if(!res.ok){
           
            throw Error("couldn't able to get data" );
            
        }
        return res.json();
    })
    .then(data=>{
        setData(data)
        setIsLoading(false)
        setError(null)
    })
    .catch(err=>{
    setError(err)
    setIsLoading(false)
    })

},[url])
    return{data,isLoading,error}

}
 

export default useFetch;