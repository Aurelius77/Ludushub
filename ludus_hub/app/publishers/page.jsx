'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"


async function getData(url){
    const res = await fetch(url)
    return res.json()
  
}

export default function Publishers(){


    const [publisher, setPublishers] = useState([])

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await getData('https://api.rawg.io/api/publishers?key=79e0a5510adc4ea3904640b7b74a1290')
          console.log(result.results)
          setPublishers(result.results)
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
    {publisher.length > 0 ? (
      publisher.map((publisher) => (
        <div key={publisher.id} className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="border rounded-md shadow-lg mb-3">
            <div className="rounded-md overflow-hidden">
              <img
                src={publisher.image_background}
                alt={publisher.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <h1 className="text-xl mt-2 mb-2 p-3">{publisher.name}</h1>
          </div>
        </div>
      ))
    ) : (
      <p>No publishers available</p>
    )}
  </div>
</main>
</>

    )
}