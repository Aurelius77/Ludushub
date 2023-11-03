import Sidebar from "../components/Sidebar"
 import { isAuthenticated } from "../utils/Auth"
import { redirect } from "next/navigation"



export default function Wishlist(){
   
    const isAuth = isAuthenticated
    if(!isAuth){
        redirect('/login')
    }



    return(
        <>
        <Sidebar/>
        </>
    )
}