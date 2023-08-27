import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Create() {
    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [body ,setBody] = useState('')
    const [success,setSuccess] = useState()

    const handlesubmit=(e)=>{
        e.preventDefault();
        const data = {title,date,body}
        if(!title || !date || !body )
        {
          alert("all fields are equired")
          return;
        }
        console.log(data)
        fetch('http://localhost:8000/data',{
        method:'POST',
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(data)
        })
        .then((res)=>{
          if(!res.ok){
            throw Error("unable to add adata")
            return
          }
            console.log("new data added")
            setSuccess(true)
            setBody('')
            setDate('')
            setTitle('')
            setTimeout(()=>{
              setSuccess()
            },2000)
        }).catch(err=>{
          setSuccess(false)
          setTimeout(()=>{
            setSuccess(null)
          },3000)
          console.log("errrrr")
        })





    }
  return (
  <div>
    <Stack sx={{ width: '50%', margin: '0 auto', textAlign: 'center' }} spacing={2}>
    {success === false && <Alert className='w-full'  severity="error">!!!OOPS, There is Error While Adding the Data</Alert>}
    {success === true &&<Alert className='w-full'  severity="success">Successfully Added The Data!!!</Alert>}
    </Stack>
    <form className='flex flex-col justify-center items-center m-8 top-10'>
        <label className='font-bold text-red-600 mt-5 text-2xl uppercase'>title:</label>
        <input
        className='rounded border p-3 border-black m-6'
        type='text'
        placeholder='title'
        required
        value={title}
        onChange={((e)=>{setTitle(e.target.value)})}
        />
        <label className='font-bold  text-red-600 text-2xl uppercase'>date:</label>
        <input 
        className='rounded border p-3 border-black m-6 '
        type='time'
        placeholder='{DD-MM-YYYY}'
        value={date}
        onChange={((e)=>{setDate(e.target.value)})}
        />
        <label className='font-bold text-red-600 text-2xl uppercase'>content:</label>
        <textarea
        className='rounded border p-3 border-black m-6 h-20 w-200'
        placeholder='body'
        required
        value={body}
        onChange={((e)=>{setBody(e.target.value)})}
        />
        <button className='bg-blue-500 opacity-90 hover:shadow-lg hover:opacity-100 shadow-blue-800 text-white px-4 py-2 rounded' onClick={handlesubmit}>create</button>
    </form>
    
    
  
    </div>
  
 
  )
}

export default Create