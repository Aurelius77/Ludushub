'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fetchDataFromAPI } from "../http/api"
import { useGlobalState } from "../context/context"
import Link from "next/link"
import Loader from "../components/Loader"


export default function Publishers(){

 const {dispatch} = useGlobalState()
 const apiKey = process.env.API_KEY
    const [publisher, setPublishers] = useState([])

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await fetchDataFromAPI(`https://api.rawg.io/api/publishers?key=${apiKey}`)
          console.log(result.results)
          setPublishers(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    
    }, [])

    function setPublisherDataInGlobalState(publisherId, gamesData){
    dispatch({
      type: 'SET_DATA',
      payload: {
        publisherId: publisherId,
        data: gamesData,
      },
    });
  };
    
    return(
        <>
        <Navbar/>
      <main className="flex">
  <Sidebar />
  <div className="flex flex-wrap w-full">
    {publisher.length > 0 ? (
      publisher.map((publisher) => (
        <Link href={{
          pathname: '/publishers/publisher',
          query: {
            data: publisher.id
          }
        }}  className="w-full md:w-1/2 lg:w-1/4 p-3"
         key={publisher.id}
         onClick={()=>setPublisherDataInGlobalState(publisher.id, publisher)}
         >
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