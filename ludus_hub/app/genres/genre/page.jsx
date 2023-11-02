'use client'
import { useGlobalState } from "@/app/context/context"
import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import Loader from "@/app/components/Loader"
import { useState } from "react"


function Genre(){
   const {state} = useGlobalState()
   const genreData = state.data || {}
   const {games, name, image_background} =  genreData.data || {}
   const [sidebarVisibilty, setSidebarVisibility] = useState(false)

    function toggleSidebar(){
      setSidebarVisibility(!sidebarVisibilty)
      console.log(sidebarVisibilty)
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
          <div className="border rounded-md shadow-lg mb-3">
            <div className="rounded-md overflow-hidden">
              <img
                src={image_background}
                alt={game.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <h1 className="text-xl mt-2 mb-2 p-3">{game.name}</h1>
          </div>
          </div>
      ))}
   
    </div>
  </div> : sidebarVisibilty ? '' : <Loader/>}
  </main>
    </>
   )
  
}

export default Genre