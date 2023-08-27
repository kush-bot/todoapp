import React, { useEffect } from 'react'
import { useState } from 'react'
import Dispaly from './Display'
import useFetch from './useFetch'
import {BiSolidMessageSquareAdd} from 'react-icons/bi'
import Create from './Create'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';





function Home() {
  const {data,isLoading,error}=useFetch('http://localhost:8000/data');
  const [isHoverd,setIsHoverd]=useState(false)

  const handlehover =() =>{
    setIsHoverd(true)
  }

  const handleleave =() =>{
    setIsHoverd(false)
  }
  
  return (
    <div >
          {error&&<div>{error}</div>} 
          {isLoading&&<div className='flex flex-col justify-center  items-center'> Loading...</div>}
          {data &&<Dispaly className={`${isHoverd ? ' blur-sm ': ''}transition-all duration-300`} data={data} />}
          <div className="relative ">
          
              <Link to="/create">
                <BiSolidMessageSquareAdd  onMouseEnter={handlehover} onMouseLeave={handleleave}style={{color:'#0897DF'}}size={150} className='absolute right-20 p-6 blur-none ' />
                </Link>

          
                <div className={`${isHoverd ? ' blur-sm ': ''}transition-all duration-300`} data={data}>
                 
                </div>
          </div>
          
  
    </div>
  )
}

export default Home