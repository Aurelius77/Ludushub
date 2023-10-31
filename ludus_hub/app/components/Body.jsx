'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Card from './Card'
import Loader from './Loader'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

async function getData(url){
    const res = await fetch(url)
    return res.json()
  
}


export default function Body(){
    let header;
    const [gamesData, setGamesData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(()=>{
      async function fetchData(){
        try{
          const result = await getData('https://api.rawg.io/api/games?key=79e0a5510adc4ea3904640b7b74a1290&dates=2023-01-01,2023-12-31&page_size=30')
          setGamesData(result.results)
          header = 'Top Games of 2023'
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
          const result = await getData(
            `https://api.rawg.io/api/games?key=79e0a5510adc4ea3904640b7b74a1290&search=${searchQuery}&page_size=30`
          );
          setSearchData(result.results)
          header = 'Results for ' + searchQuery
        } catch (err) {
          console.log(err);
        }
    }
      
    }

    const displayData = searchData.length > 0 ? searchData : gamesData

  return(
    <div className='flex flex-col items-center'>
    <Navbar onSearch={handleSearch}/>
    <div className='block md:flex w-full justify-between'>
      <Sidebar/>
      <div className="">
        {displayData.length > 0 ? <h1 className='text-3xl mb-4 mt-5 ml-4'>{header}</h1> : ''}
        <div className="container flex flex-wrap justify-center md:justify-evenly"> 
      {displayData.length > 0 ? displayData.map((game, index)=>{
        return <Card key={index} props={game}/>
      }) : <Loader/>}
       </div>
      </div>
    </div>
    </div>
  )
}