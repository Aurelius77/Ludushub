'use client'
import { useEffect, useState } from 'react'
import Card from './Card'
import Loader from './Loader'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { fetchDataFromAPI } from '../http/api'


export default function Body(){
  const apiKey = process.env.API_KEY
    const [gamesData, setGamesData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [sidebarVisibilty, setSidebarVisibility] = useState(false)
    const [loading, setIsLoading] = useState(false)
    const [header, setHeader] = useState('Top Games of 2023')

    useEffect(()=>{
      async function fetchData(){
        try{
          const result = await fetchDataFromAPI(`https://api.rawg.io/api/games?key=${apiKey}&dates=2023-01-01,2023-12-31&page_size=30`)
          setGamesData(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    }, [])

  
     async function handleSearch(query){
       setSearchQuery(query)
      console.log(searchQuery)
       if (searchQuery !== '') {
        try {
          setIsLoading(true)
          setHeader('')
          const result = await fetchDataFromAPI(
            `https://api.rawg.io/api/games?key=${apiKey}&search=${searchQuery}&page_size=30`
          );
          setSearchData(result.results)
          setIsLoading(false)
          setHeader('Results for ' + searchQuery)
        } catch (err) {
          console.log(err);
        }
    }
      
    }

    function toggleSidebar(){
      setSidebarVisibility(!sidebarVisibilty)
      console.log(sidebarVisibilty)
    }

    const displayData = searchData.length > 0 ? searchData : gamesData

  return(
    <div className='flex flex-col items-center'>
    <Navbar onSearch={handleSearch} toggleSidebar = {toggleSidebar} />
    <div className='block md:flex w-full justify-between'>
      <Sidebar visibility = {sidebarVisibilty}/>
      {!sidebarVisibilty ?<div className="">
        {displayData.length > 0 ?<h1 className='text-3xl mb-4 mt-5 ml-4'>{header}</h1> : ''}
        <div className="container flex flex-wrap justify-center md:justify-evenly"> 
      {!loading && displayData.length > 0 ? displayData.map((game, index)=>{
        return <Card key={index} props={game}/>
      }) : <Loader/>}
       </div>
      </div> : ''}
    </div>
    </div>
  )
}