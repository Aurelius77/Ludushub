'use client'
import { useGlobalState } from "@/app/context/context"
import Navbar from "@/app/components/Navbar"
import Sidebar from "@/app/components/Sidebar"
import Loader from "@/app/components/Loader"


function Publisher(){
   const {state} = useGlobalState()
   const publisherData = state.data
   const {games, name, image_background} =  publisherData.data


   return(
    <>
    <Navbar/>
    <main className="flex items-start">
    <Sidebar/>
    <div className="w-full">
      <h1 className="text-2xl font-bold">{`Top Games from ${name}`}</h1>
    <div className="flex flex-wrap w-full">
    {games.length > 0 ? (
      games.map((game) => (
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
      ))
    ) : (
      <Loader/>
    )}
    </div>
  </div>
  </main>
    </>
   )
  
}

export default Publisher