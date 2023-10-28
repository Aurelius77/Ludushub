import Image from 'next/image'
import profile from '../../public/assets/profile.png'
import searchbtn from '../../public/assets/search.svg'
import menu from '../../public/assets/menu.svg'


export default function Navbar(){
    return(
        <>
        <nav className='p-3 flex items-center w-full justify-between'>
      <h1 className="tracking-widest p-3 w-1/3">Ludus</h1>
      <div className=" hidden lg:block input-box relative w-1/3">
      <Image src={searchbtn} className='absolute left-2 top-1/2 -transform -translate-y-1/2' width='20' height='20'/>
      <input type='text' className='p-3 border rounded-md bg-gray-300 w-full text-black pr-3 pl-10' placeholder='search for games'></input>
      </div>
      <div className="right flex items-center w-1/3 cursor-pointer">
        <h1 className=' hidden md:block ml-auto'>Home</h1>
        <div className="user flex items-center mr-5 ml-5">
          <h1 className='hidden md:block'>Login</h1>
          <Image src={profile}/>
          <Image src={menu} className='block md:hidden ml-2'/>
        </div>
      </div>
      </nav>
        </>
    )
}