import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'


const Nav = () => {
    const hello = useNavigate()
  return (
   <>

   <div className=' p-3 bg-teal-300 shadow-2xl flex justify-between'>
    <div className=' text-3xl text-white'>
        logo
    </div>
    <div className=' flex'>
        <p onClick={()=>hello("/home")} className=' cursor-pointer text-white mr-6 '>Home</p>
        <p onClick={()=>hello("/contact")} className=' cursor-pointer text-white  mr-6 '>Contact</p>
        <p onClick={()=>hello("/about")} className=' cursor-pointer text-white mr-6 '>About</p>
    </div>
   </div>
   
   </>
  )
}

export default Nav