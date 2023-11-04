import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import spidey from '../../public/assets/spidey.webp'
import Image from "next/image"

export default function Profile(){
    
    return(
        <>
        <Navbar/>
        <div className="flex">
            <Sidebar/>
           <div className="flex justify-between items-start">
             <div className="left flex flex-col p-3">
               <Image src={spidey} width='100' height='100' alt='icon' className="rounded-full"/>
               <h1 className="text-2xl">Aurelius</h1>
               <p className="text-xl">akinpeluifeoluwa007@gmail.com</p>
             </div>
           
           <div className="flex flex-col">
            <button className="p-3 rounded-md  bg-red-500">Logout</button>
           </div>
           </div>
        </div>
        </>
    )
}