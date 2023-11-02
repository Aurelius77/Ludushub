import Image from 'next/image'
import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';

export default function Card({props}){
   const [isClicked, setIsClicked] = useState(false);

function getPlatformImage(platformName) {
  switch (platformName) {
    case 'Android':
      return '/assets/android.svg';
    case 'PlayStation':
      return '/assets/playstation.svg';
    case 'Linux':
      return '/assets/linux.png';
    case 'PC':
      return '/assets/windows.png';
    case 'Xbox':
      return '/assets/xbox.svg';
    case 'iOS':
      return '/assets/apple.svg';
    case 'Apple Machintosh':
      return '/assets/apple.svg';
    default:
      return ; // Provide a default image URL for unmatched platform names.
  }
}

function handleHeartClick(){
  setIsClicked(!isClicked)
}

    return(
        <>
      <div className="w-full md:w-1/2 lg:w-1/4 p-3">
  <div className="rounded-md shadow-md border border-gray-300 hover:shadow-lg hover:border-gray-400 transition-transform transform hover:scale-105">
    <div className="rounded-md overflow-hidden relative">
      <img
        src={props && props.background_image}
        alt=""
        className="w-full h-40 object-cover"
      />
      <HeartIcon className={`h-6 w-6 absolute right-2 top-2 cursor-pointer ${isClicked ? 'text-red-500' : ''}`} onClick={handleHeartClick}/>
    </div>
    <div className="game-info p-3 flex items-center justify-between">
      <ul className="flex items-center">
        {props ? (
          props.parent_platforms.map((platform, index) => (
            <Image
              key={index}
              src={getPlatformImage(platform.platform.name)}
              alt=""
              width={30}
              height={30}
            />
          ))
        ) : (
          <li>No platforms</li>
        )}
      </ul>
      <p className="pl-1 pr-1 border border-white">{props.metacritic}</p>
    </div>
    <h1 className="text-xl mt-2 mb-2 p-3">{props.name}</h1>
    <div className="genres flex items-center flex-wrap">
      {props.genres.map((genre, index) => (
        <p key={index} className="m-2 px-2 py-1 rounded-full bg-green-500 text-white">
          {genre.name}
        </p>
      ))}
    </div>
  </div>
</div>

      </>
    )
}