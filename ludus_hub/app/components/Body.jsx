'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Card from './Card'
import Loader from './Loader'

async function getData(){
    const res = await fetch('https://api.rawg.io/api/games?key=79e0a5510adc4ea3904640b7b74a1290')
    return res.json()
}

export default function Body(){
    const [gamesData, setGamesData] = useState([])
    useEffect(()=>{
      async function fetchData(){
        try{
          const result = await getData()
          console.log(result.results)
          setGamesData(result.results)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchData()
    }, [])

  return(
    <>
    <div className="container flex flex-wrap">
      {gamesData.length > 0 ? gamesData.map((game, index)=>{
        return <Card key={index} props={game}/>
      }) : <Loader/>}
    </div>
    </>
  )
}