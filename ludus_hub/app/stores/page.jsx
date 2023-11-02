'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fetchDataFromAPI } from "../http/api"
import Link from "next/link"
import Loader from "../components/Loader"


export default function Stores(){
const apiKey = process.env.API_KEY

    const [stores, setstores] = useState([])

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
        <Navbar/>
      <main className="flex">
  <Sidebar />
  <div className="flex flex-wrap w-full">
    {stores.length > 0 ? (
      stores.map((store) => (
       <Link href={`https://${store.domain}`}
           className="w-full md:w-1/2 lg:w-1/4 p-3"
         key={store.id}
         >
          <div className="border rounded-md shadow-lg mb-3">
            <div className="rounded-md overflow-hidden">
              <img
                src={store.image_background}
                alt={store.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <h1 className="text-xl mt-2 mb-2 p-3">{store.name}</h1>
          </div>
        </Link>
      ))
    ) : (
      <Loader/>
    )}
  </div>
</main>
</>

    )
}