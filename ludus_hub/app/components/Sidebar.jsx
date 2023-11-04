'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar({visibility}){


    const SidebarRoutes = [
      {
        name : 'Home',
        route : '/'
      },

      {
        name : 'Profile',
        route : '/profile'
      },


      {
        name : 'Favourites',
        route : '/favourites'
      },

      {
        name : 'Platforms',
        route : '/platforms'
      },

      {
        name : 'Publishers',
        route : '/publishers'
      },

      {
        name : 'Tags',
        route : '/tags'
      },
      {
        name : 'Genres',
        route : '/genres'
      },

      {
        name : 'Metacritic',
        route : '/ratings'
      },

      {
        name : 'Stores',
        route : '/stores'
      }

    ]

    const currentPath = usePathname()

    return(
        <>
       <nav className={`sm:${visibility ? 'absolute top-0 left-0 z-40 w-full h-screen p-4  transition-transform -translate-x-full' : ''}p-3`}>
         <ul className={`sm: ${visibility ? 'flex flex-col m-3 cursor-pointer': 'hidden' } md:flex flex-col m-3 cursor-pointer`}>
           {SidebarRoutes.map((link, index)=>{
            return <Link key={index} href={link.route}><li className={`p-3 m-3 text-xl ${currentPath === link.route ? 'border-b border-b-cyan-400 font-bold' : ''}`}>
            {link.name}</li></Link>
           })}
         </ul>
       </nav>
        </>
    )
}


