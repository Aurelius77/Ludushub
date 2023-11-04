'use client'
import spidey from '../../../public/assets/spidey.webp'
import Image from 'next/image'
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export default function Register(){
  const [isPassword, setIsPassword] = useState(true)
  const [sidebarVisibilty, setSidebarVisibility] = useState(false)

  function handleEyeClick(){
    setIsPassword(!isPassword)
  }

  function toggleSidebar(){
    setSidebarVisibility(!sidebarVisibilty)
  }

   function handleFormSubmit(e){
      e.preventDefault()
   }



    return(
        <>
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="flex justify-center items-center h-screen">
  <div className=" block justify-center items-center md:flex">
    <div className=' hidden md:w-1/2 md:block'>
      <Image src={spidey} alt="" className='ml-auto w-full rounded-md' priority={true}/>
    </div>
      <form className='p-10 flex flex-col w-full md:mr-auto md:w-1/3 md:p-10 bg-white text-black rounded-md' onSubmit={handleFormSubmit}>
         <h1 className='text-xl p-3'>Register</h1>
         <label>Email:</label>
         <input type='email' placeholder='Enter email address' className='p-3  mb-3 border rounded-md' required/>

         <label>Password:</label>
             <div className='relative w-full'>
         <input type={isPassword ? 'password' : 'text'} placeholder='Enter your password' className='p-3 mb-3 border rounded-md w-full' required/>
         <EyeIcon className=' h-6 w-6 cursor-pointer absolute top-1/2 right-2 -transform -translate-y-1/2' onClick={handleEyeClick}/>
              </div>

              <label>Username:</label>
         <input type='text' placeholder='Enter username' className='p-3  mb-3 border rounded-md' required/>


         <button className='bg-black text-cyan-400 rounded-md p-3 mb-3'>Register</button>
           <div className=' block md:flex justify-between items-center'>
                           <p>Already have an account yet? <Link href='/login/register'><span className='text-blue-400 underline' >Login</span></Link></p>
              <Link href='/login/forgot_password'><p className='text-blue-400 underline'>Forgot password?</p></Link>
           </div>
      </form>
  </div>
</div>

        </>
    )
}