import spidey from '../../public/assets/spidey.webp'
import Image from 'next/image'

export default function Register(){
    return(
        <>
        <div className="flex justify-center items-center h-screen">
  <div className="flex space-x-4">
    <div>
      <Image src={spidey} alt="" className='w-3/4' priority={true}/>
    </div>
    <div>
    </div>
  </div>
</div>

        </>
    )
}