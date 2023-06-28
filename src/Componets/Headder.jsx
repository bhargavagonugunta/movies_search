import { useState } from "react";

import BannerHead from "./BannerHead";

const Headders = ()=>{
    const [baner,setbaner] = useState(false)

    const banerhandle =()=>{
        setbaner(true);    
    }
    const banerhandels = ()=>{
        setbaner(false);
    }

    return(
        <div className="h-[70px] bg-gray-200  flex fixed top-0 w-[100%] z-[999]">
            <a href="/"> <h1  className=" m-4 text-2xl shadow-slate-500  w-[250px] hover:pointer-events-none " > Movies Search</h1></a>
            <div className="w-[100%] flex-wrap">
            <ul className=" ml-auto pt-6 flex justify-end ">
                <li onMouseEnter={banerhandle} onMouseLeave={banerhandels} className="mr-8 text-right hover:visible" > Telugu{ baner?<BannerHead />:" " }</li>
                <li className="mr-8 text-right hover:pointer-events-none"> English  </li>
                <li className="mr-8 text-right hover:pointer-events-none"> Hindi </li>
                <li className="mr-12 text-right hover:pointer-events-none"> genre </li>
            </ul>
            </div>
        </div>
    )
}

export default Headders;