'use client'
import { useGlobalState } from "@/app/context/context"
import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import Loader from "@/app/components/Loader"
import { useState } from "react"
import SidebarCard from "@/app/components/SidebarCard"

function Publisher(){
   const {state} = useGlobalState()
   const publisherData = state.data || {}
   const {games, name, image_background} =  publisherData.data || {}
   const [sidebarVisibilty, setSidebarVisibility] = useState(false)

   function toggleSidebar(){
    setSidebarVisibility(!sidebarVisibilty)
   }

   return(
    <>
    <Navbar toggleSidebar={toggleSidebar}/>
    <main className="flex items-start">
    <Sidebar visibility={sidebarVisibilty}/>
    {!sidebarVisibilty && games && games.length > 0 ? <div className="w-full">
      <h1 className="text-2xl font-bold">{`Top Games from ${name}`}</h1>
    <div className="flex flex-wrap w-full">
      {games.map((game) => (
        <div className="w-full md:w-1/2 lg:w-1/4 p-3" key={game.id}>
          <SidebarCard props={game} image={image_background} isShowing={true}/>
          </div>
      ))}
   
    </div>
  </div> : sidebarVisibilty ? '' : <Loader/>}
  </main>
    </>
   )
  
}

export default Publisher