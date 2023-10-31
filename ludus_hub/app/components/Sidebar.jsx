'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar(){

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
        name : 'Platforms',
        route : '/platforms'
      },

      {
        name : 'Wishlist',
        route : '/wishlist'
      },

      {
        name : 'Favourites',
        route : '/favourites'
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
        name : 'Game trailers',
        route : '/trailers'
      },

      {
        name : 'Metacritic',
        route : '/ratings'
      },

      {
        name : 'Date',
        route : '/date'
      }

    ]

    const currentPath = usePathname()

    return(
        <>
       <nav className='p-3'>
         <ul className="hidden md:flex flex-col m-3 cursor-pointer">
           {SidebarRoutes.map((link, index)=>{
            return <Link key={index} href={link.route}><li className={`p-3 m-3 text-xl ${currentPath === link.route ? 'border-b border-b-cyan-400 font-bold' : ''}`}>
            {link.name}</li></Link>
           })}
         </ul>
       </nav>
        </>
    )
}


