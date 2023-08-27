import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch'

function Details() {
    const { id } = useParams()
    const {data,isLoading,error} = useFetch('http://localhost:8000/data/'+id)
    console.log(data)
  return (
    <div className='preview container mx-auto'>
        {isLoading && <div>loading..</div>}
        {error && <div>{error}</div>}
        {data && (
            <div className='border p-5 shadow hover:shadow-xl hover:border-red-500'>
                <h1 className='text-red-500 text-2xl uppercase'>{data.title}</h1>
                <h3>{data.date}</h3>
                <p>{data.body}</p>
        
        </div>

 
    )}
        
    </div>
  )
}

export default Details