'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"


async function getData(url){
    const res = await fetch(url)
    return res.json()
  
}

export default function Platforms(){


    const [platform, setPlatforms] = useState([])

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await getData('https://api.rawg.io/api/platforms?key=79e0a5510adc4ea3904640b7b74a1290')
          console.log(result.results)
          setPlatforms(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    
    }, [])
    
    return(
        <>
        <Navbar/>
      <main className="flex">
  <Sidebar />
  <div className="flex flex-wrap w-full">
    {platform.length > 0 ? (
      platform.map((platform) => (
        <div key={platform.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="border rounded-md shadow-lg mb-3">
            <div className="rounded-md overflow-hidden">
              <img
                src={platform.image_background}
                alt={platform.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <h1 className="text-xl mt-2 mb-2 p-3">{platform.name}</h1>
          </div>
        </div>
      ))
    ) : (
      <p>No platforms available</p>
    )}
  </div>
</main>
</>

    )
}