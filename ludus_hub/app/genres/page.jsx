'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fetchDataFromAPI } from "../http/api"
import { useGlobalState } from "../context/context"
import Link from "next/link"
import Loader from "../components/Loader"
import { HeartIcon } from "@heroicons/react/24/solid";
import SidebarCard from "../components/SidebarCard"




export default function Genres(){
const apiKey = process.env.API_KEY
const {dispatch} = useGlobalState()

    const [genre, setGenres] = useState([])
    const [sidebarVisibilty, setSidebarVisibility] = useState(false)

    function toggleSidebar(){
      setSidebarVisibility(!sidebarVisibilty)
      console.log(sidebarVisibilty)
    }

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await fetchDataFromAPI(`https://api.rawg.io/api/genres?key=${apiKey}`)
          setGenres(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    
    }, [])

    function setgenresDataInGlobalState(genreId, gamesData){
    dispatch({
      type: 'SET_DATA',
      payload: {
        genreId: genreId,
        data: gamesData,
      },
    });
  };

    
    return(
        <>
        <Navbar toggleSidebar = {toggleSidebar}/>
      <main className="flex">
  <Sidebar visibility = {sidebarVisibilty}/>
  {!sidebarVisibilty ? <div className="flex flex-wrap w-full">
    {genre.length > 0 ? (
      genre.map((genre) => (
       <Link href={{
          pathname: '/genres/genre',
          query: {
            data: genre.id
          }
        }}  className="w-full md:w-1/2 lg:w-1/4 p-3"
         key={genre.id}
         onClick={()=>setgenresDataInGlobalState(genre.id, genre)}
         >
          <SidebarCard props = {genre} isShowing={false}/>
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