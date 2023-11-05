'use client'
import { useGlobalState } from "../context/context"
import { fetchDataFromAPI } from "../http/api"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"


export default function Game(){
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
        console.log(result)
        console.log('data: ',  data)
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

  return(
    <>
    <Navbar toggleSidebar={toggleSidebar}/>
  <div className="flex">
    <Sidebar visibility={visibility}/>
    {!visibility && data.length > 0 ? <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="img-cont">
          <p>{data[0].name}</p>
        </div>
      </div>

    </div> 
    
    
    
    : ''}
  </div>
    </>
  )
}