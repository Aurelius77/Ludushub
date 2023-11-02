'use client'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { fetchDataFromAPI } from "../http/api"
import { useGlobalState } from "../context/context"
import Link from "next/link"
import Loader from "../components/Loader"


export default function Tags(){

 const {dispatch} = useGlobalState()
 const apiKey = process.env.API_KEY
    const [tags, setTags] = useState([])
    const [sidebarVisibilty, setSidebarVisibility] = useState(false)

   function toggleSidebar(){
    setSidebarVisibility(!sidebarVisibilty)
   }

    useEffect(() => {
      async function fetchData(){
        try{
          const result = await fetchDataFromAPI(`https://api.rawg.io/api/tags?key=${apiKey}`)
          console.log(result.results)
          setTags(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    
    }, [])

    function setTagDataInGlobalState(tagId, tagData){
    dispatch({
      type: 'SET_DATA',
      payload: {
        tagId: tagId,
        data: tagData,
      },
    });
  };
    
    return(
        <>
        <Navbar toggleSidebar={toggleSidebar}/>
      <main className="flex">
  <Sidebar visibility={sidebarVisibilty} />
  {!sidebarVisibilty ? <div className="flex flex-wrap w-full">
    {tags.length > 0 ? (
      tags.map((tag) => (
        <Link href={{
          pathname: '/tags/tag',
          query: {
            data: tag.id
          }
        }}  className="w-full md:w-1/2 lg:w-1/4 p-3"
         key={tag.id}
         onClick={()=>setTagDataInGlobalState(tag.id, tag)}
         >
          <div className="border rounded-md shadow-lg mb-3">
            <div className="rounded-md overflow-hidden">
              <img
                src={tag.image_background}
                alt={tag.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <h1 className="text-xl mt-2 mb-2 p-3">{tag.name}</h1>
          </div>
        </Link>
      ))
    ) : (
      <Loader/>
    )}
  </div>: ''}
</main>
</>

    )
}