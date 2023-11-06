'use client'
import { useGlobalState } from "../context/context"
import { fetchDataFromAPI } from "../http/api"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


export default function Game(){
  const router = useRouter()
   const apiKey = process.env.API_KEY
   const {state} = useGlobalState()
   const publisherData = state.data || {}
   const id = publisherData.gameId || {}
   const [data, setData] = useState([])
   const [visibility, setVisibility] = useState(false)
   
   useEffect(()=>{
      async function fetchData(){
        try{
        const result = await fetchDataFromAPI( `https://api.rawg.io/api/games/${id}?key=${apiKey}`)
        setData([result])
        }
        catch(err){
          console.log(err)
        }
      }

      fetchData()
   }, [])

   function toggleSidebar(){
    setVisibility(!visibility)
   }

   function redirectUser(url){
    router.push(`https://${url}`)
   }

  return(
    <>
    <Navbar toggleSidebar={toggleSidebar}/>
  <div className="flex">
    <Sidebar visibility={visibility}/>
    {!visibility && data.length > 0 ? <div className="flex flex-col">
      <div className=" justify-between p-2">
        <div className="img-cont">
          <img src={data[0].background_image} alt='poster'></img>
        </div>
        <div className="game-info flex flex-col md:p-2">
          <div className="mb-3 mt-3 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl mb-2 mt-2 md:mt-0">{data[0].name}</h1>
          <button className=" mt-3 mb-3 cursor-pointer bg-red-500 text-white p-3 rounded-md md:mt-0 md:mb-0 ">Add to favourites</button>
          </div>
          <p className="mb-2">{data[0].description_raw}</p>
          <h1 className="mb-2">Available on this platforms:</h1>
          <div className="platforms flex mb-3">
            { data[0].parent_platforms.map((platform, index)=>{
              return <p key={index} className="border p-1 m-1">{platform.platform.name}</p>
            })}
          </div>
          <h1 className="mb-2">Genres:</h1>
          <div className="platforms flex mb-3">
            { data[0].genres.map((genre, index)=>{
              return <p key={index} className="border p-1 m-1">{genre.name}</p>
            })}
          </div>

          <h1 className="mb-2">Developed by:</h1>
          <div className="platforms flex mb-3">
            { data[0].developers.map((developer, index)=>{
              return <p key={index} className="border p-1 m-1">{developer.name}</p>
            })}
          </div>
        </div>
      </div>

      <div className="extra-info ml-2">
         <h1 className="text-xl">{data[0].name} can be gotten from:</h1>
  <div className =' flex  flex-wrap'>
          {data[0].stores.map((store, index)=>{
            return <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-3" onClick={()=>redirectUser(store.store.domain)}>
  <div className="rounded-md shadow-md border border-gray-300 hover:shadow-lg hover:border-gray-400 transition-transform transform hover:scale-105">
    <div className="rounded-md overflow-hidden">
      <img
        src={store.store.image_background}
        alt=""
        className="w-full h-40 object-cover"
      />
    </div>
    <h1 className="text-xl mt-2 mb-2 p-3">{store.store.name}</h1>
  </div>
</div>
          })}
          </div>
      </div>

    </div> 
    
    
    
    : ''}
  </div>
    </>
  )
}