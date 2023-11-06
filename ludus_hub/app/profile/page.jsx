'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import spidey from '../../public/assets/spidey.webp'
import Image from "next/image"
import Link from "next/link"
import Card from '../components/Card'
import Loader from "../components/Loader"
import games from "../components/demo"
import { useState } from "react"


import { ArrowLongRightIcon } from "@heroicons/react/24/solid"

export default function Profile(){
  const [visibility, setVisibility] = useState(false)

  function toggleSidebar(){
    setVisibility(!visibility)
  }

    
    return(
        <>
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="flex">
            <Sidebar visibility={visibility}/>
            {!visibility ? <div className="flex flex-col w-full">
           <div className="flex flex-col md:flex-row justify-between w-full h-max">
             <div className="left flex flex-col p-3 ml-2">
               <Image src={spidey} width='100' height='100' alt='icon' className="rounded-full"/>
               <h1 className="text-2xl">Aurelius</h1>
               <p className="text-xl">akinpeluifeoluwa007@gmail.com</p>
             </div>
           
           <div className="flex flex-col justify-center items-center">
            <button className="p-3 rounded-md  bg-red-500 mr-5">Logout</button>
           </div>
           </div>


           <div className="favourites mt-6">
            <div className="top flex justify-between">
            <h1 className="text-2xl p-3">My Favourites</h1>
            <div className="mr-5 flex items-center cursor-pointer">
              <Link href='/favourites'><p className="mr-1 p-3">See all</p></Link>
              <Link href='/favourites'><ArrowLongRightIcon className="h-5 w-5"/></Link>
            </div>
            
            </div>
           </div>
            <div className="container flex flex-wrap justify-center md:justify-evenly"> 
      {games  ? games.map((game, index)=>{
        return <Card key={index} props={game} isSelected= {true}/>
      }) : <Loader/>}
       </div>
           </div>: ''}

          
        </div>
        </>
    )
}