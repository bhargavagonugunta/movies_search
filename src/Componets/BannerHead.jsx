import { useState } from "react"

const BannerHead = ()=>{
   // const [baner,setbaner] = useState(false)

   

    return(
            <div>
                <div className="w-[120px] mt-4 ">
                  <div className="">                            
                    <ul className="bg-gray-200  rounded-lg text-left " >
                    <li className="m-2"><a href="#">Horror</a></li>
                        <li className="m-2"><a href="#">Romance</a></li>
                        <li className="m-2"><a href="#">Thrillr</a></li>
                        <li className="m-2"><a href="#">Action</a></li>
                        <li className="m-2"><a href="#">Adventure</a></li>
                        <li className="m-2 mb-4"><a href="#">Comedy</a></li>
                    </ul>
                    </div>
                </div>
            </div>
    )
}
export default BannerHead;