'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fetchDataFromAPI } from "../http/api"
import { useGlobalState } from "../context/context"
import Link from "next/link"
import Loader from "../components/Loader"
import SidebarCard from "../components/SidebarCard"


export default function Platforms(){
const apiKey = process.env.API_KEY
const {dispatch} = useGlobalState()

    const [platform, setPlatforms] = useState([])
    const [sidebarVisibilty, setSidebarVisibility] = useState(false)

    function toggleSidebar(){
      setSidebarVisibility(!sidebarVisibilty)
      console.log(sidebarVisibilty)
    }

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await fetchDataFromAPI(`https://api.rawg.io/api/platforms?key=${apiKey}`)
          console.log(result.results)
          setPlatforms(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    
    }, [])

    function setPlatformsDataInGlobalState(platformId, gamesData){
    dispatch({
      type: 'SET_DATA',
      payload: {
        platformId: platformId,
        data: gamesData,
      },
    });
  };
    
    return(
        <>
        <Navbar toggleSidebar={toggleSidebar}/>
      <main className="flex">
  <Sidebar visibility={sidebarVisibilty} />
  {!sidebarVisibilty ? <div className="flex flex-wrap w-full">
    {platform.length > 0 ? (
      platform.map((platform) => (
       <Link href={{
          pathname: '/platforms/platform',
          query: {
            data: platform.id
          }
        }}  className="w-full md:w-1/2 lg:w-1/4 p-3"
         key={platform.id}
         onClick={()=>setPlatformsDataInGlobalState(platform.id, platform)}
         >
          <SidebarCard props ={platform} isShowing={false}/>
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