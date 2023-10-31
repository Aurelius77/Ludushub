'use client'
import Image from 'next/image'
import profile from '../../public/assets/profile.png'
import searchbtn from '../../public/assets/search.svg'
import menu from '../../public/assets/menu.svg'
import { useState, useEffect } from 'react'
import Link from 'next/link'


export default function Navbar({onSearch}){
   const [searchInput, setSearchInput] = useState('')

 

   function handleInputChange(e){
    setSearchInput(e.target.value)
   }

   async function handleSearch(event){
    if (event.key === 'Enter') {
       console.log('clicked')
       await onSearch(searchInput)
    }
  };

  async function onSubmit(){
    console.log('clicked btn')
    await onSearch(searchInput)
  }


    return(
        <>
        <nav className='p-3 flex items-center w-full justify-between mb-5'>
      <h1 className="tracking-widest p-3 w-1/3"><Link href='/'>Ludus</Link></h1>
      <div className=" hidden md:block input-box relative w-full">
      <Image src={searchbtn} className='absolute left-2 top-1/2 -transform -translate-y-1/2' width='20' height='20' alt='' onClick={onSubmit}/>
      <input type='text'
       className='p-3 border rounded-md bg-gray-300 w-full text-black pr-3 pl-10'
        placeholder='search for games'
        value={searchInput}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
        ></input>
      </div>
      <div className="right flex items-center w-1/3 cursor-pointer">
                  <Image src={profile} alt='login' className='hidden md:block ml-auto mr-5'/>
          <Image src={menu} className='block md:hidden ml-auto mr-5' alt='menu'/>
        </div>
      </nav>
        </>
    )
}