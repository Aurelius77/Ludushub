import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';


export default function SidebarCard({props, image, isShowing}){
    const [isClicked, setIsClicked] = useState(false);

    function handleHeartClick(){
    setIsClicked(!isClicked)
  }
    return (
        <>
         <div className="border rounded-md shadow-lg mb-3">
            <div className="rounded-md overflow-hidden relative">
              <img
                src={props.image_background || image}
                alt={props.name}
                className="w-full h-40 object-cover"
              />
               {isShowing ? <HeartIcon className={`h-6 w-6 absolute right-2 top-2 cursor-pointer ${isClicked ? 'text-red-500' : ''}`} onClick={handleHeartClick}/> : ''}
            </div>
            <h1 className="text-xl mt-2 mb-2 p-3">{props.name}</h1>
          </div>
        </>
    )
}