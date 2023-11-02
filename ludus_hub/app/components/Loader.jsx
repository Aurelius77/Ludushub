import '../../app/globals.css'

export default function Loader(){
    return(
        <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='w-full flex items-center justify-center'>
        <span className='loader'/>
        </div>
        </div>
        </>
    )
}