import {React,useState} from 'react'
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
    const [nav,setNav]=useState(true)
    const handlenav = () =>{
        setNav(!nav)
    }
  return (
    <div className="preview flex justify-between items-center mx-auto max-w-[1250px] h-24">
            <h1 className='p-10 text-4xl text-red-600 font-bold w-full'>toDoapp</h1>
            <ul className='hidden md:flex'>
              <Link to="/home"><li className='p-5 text-xl hover:text-blue-500'>Home</li></Link>
                <li className='p-5 text-xl'>About</li>
            </ul>
            <div onClick={handlenav} className='flex md:hidden'>
                {!nav ? <AiOutlineClose size={30}/>:<BiMenu size={30} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-80 border-r ease-in-out duration-500 bg-white h-full':'fixed left-[-100%]'}>
            <h1 className='p-7 text-4xl text-red-600 font-bold w-full'>toDoapp</h1>
                <ul className='pt-24 uppercase left-5 p-5'>
                  <Link to="/home"><li className='p-5 text-xl border-b border-black hover:text-blue-500'>Home</li></Link>
                    <li className='p-5 text-xl border-b border-black'>About</li>
                </ul>
            </div>
    </div>
  )
}

export default Header