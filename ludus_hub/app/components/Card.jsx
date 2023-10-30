import Image from 'next/image'

export default function Card({props}){

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

    return(
        <>
      <div className="container flex border rounded-md flex-col p-3 w-full md:w-1/3 lg:w-1/4 m-2">
         <div className="div border rounded-md">
            <img src={props && props.background_image} alt=''/>
         </div>
         <div className="game-info p-3 flex items-center w-full justify-between">
            <ul className='flex items-center'>
      {props ? props.parent_platforms.map((platform)=>{
        return <Image src={getPlatformImage(platform.platform.name)} alt='' width='30' height='30'/>
      }) : <li>No platforms</li>}
            </ul>
            <p className='pl-1 pr-1 border border-white'>{props.metacritic}</p>
         </div>
         <h1 className = 'text-xl mt-2 mb-2'>{props.name}</h1>
         <div className="genres flex items-center flex-wrap">
            {props.genres.map((genre)=>{
                return <p className=' m-2 px-2 py-1 rounded-full bg-green-500 text-white'>{genre.name}</p>
            })}
         </div>
      </div>
      </>
    )
}