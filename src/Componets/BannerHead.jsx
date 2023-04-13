import { useState } from "react"

const BannerHead = ()=>{
   // const [baner,setbaner] = useState(false)

   

    return(
            <div className="w-[130px] mt-5 bg-pink-200  rounded-lg text-left  "   >                      
                    <ul className="w-[130px] mb-3 " >
                    <li className="pl-2 hover:bg-pink-600 mb-2 rounded-lg "><a href="#"> Horror</a></li>
                        <li className="pl-2 hover:bg-pink-600 mb-2 rounded-lg "><a href="#">Romance</a></li>
                        <li className="pl-2 hover:bg-pink-600 mb-2 rounded-lg "><a href="#">Thrillr</a></li>
                        <li className="pl-2 hover:bg-pink-600 mb-2 rounded-lg "><a href="#">Action</a></li>
                        <li className="pl-2 hover:bg-pink-600 mb-2 rounded-lg "><a href="#">Adventure</a></li>
                        <li className="pl-2 hover:bg-pink-600 mb-2 rounded-lg "><a href="#">Comedy</a></li>
                    </ul>
                
    
            </div>
    )
}
export default BannerHead;