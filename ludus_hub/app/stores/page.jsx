'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fetchDataFromAPI } from "../http/api"
import Link from "next/link"
import Loader from "../components/Loader"
import SidebarCard from "../components/SidebarCard"


export default function Stores(){
const apiKey = process.env.API_KEY

    const [stores, setstores] = useState([])
    const [sidebarVisibilty, setSidebarVisibility] = useState(false)

   function toggleSidebar(){
    setSidebarVisibility(!sidebarVisibilty)
   }

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await fetchDataFromAPI(`https://api.rawg.io/api/stores?key=${apiKey}`)
          setstores(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    
    }, [])

    
    return(
        <>
        <Navbar toggleSidebar={toggleSidebar}/>
      <main className="flex">
  <Sidebar visibility={sidebarVisibilty}/>
  {!sidebarVisibilty ? <div className="flex flex-wrap w-full">
    {stores.length > 0 ? (
      stores.map((store) => (
       <Link href={`https://${store.domain}`}
           className="w-full md:w-1/2 lg:w-1/4 p-3"
         key={store.id}
         >
          <SidebarCard props = {store} isShowing= {false}/>
        </Link>
      ))
    ) : (
      <Loader/>
    )}
  </div> : ''}
</main>
</>

    )
}