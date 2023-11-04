'use client'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { fetchDataFromAPI } from '../http/api'


export default function Favourites(){
  const apiKey = process.env.API_KEY
    const [gamesData, setGamesData] = useState([])
    const [sidebarVisibilty, setSidebarVisibility] = useState(false)
    const [header, setHeader] = useState('My Favourites')


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


    function toggleSidebar(){
      setSidebarVisibility(!sidebarVisibilty)
      console.log(sidebarVisibilty)
    }


    function handleIconClick(id){

        const newArray = gamesData.filter((game)=> game.id !== id)
        console.log(newArray)
        setGamesData(newArray)

    }

  return(
    <div className='flex flex-col items-center'>
    <Navbar toggleSidebar = {toggleSidebar} />
    <div className='block md:flex w-full justify-between'>
      <Sidebar visibility = {sidebarVisibilty}/>
      {!sidebarVisibilty ?<div className="">
        {gamesData.length > 0 ?<h1 className='text-3xl mb-4 mt-5 ml-4'>{header}</h1> : ''}
        <div className="container flex flex-wrap justify-center md:justify-evenly"> 
      {gamesData.length > 0 ? gamesData.map((game, index)=>{
        return <Card key={index} props={game} isSelected= {true} handleIconClick = {handleIconClick}/>
      }) : <Loader/>}
       </div>
      </div> : ''}
    </div>
    </div>
  )
}