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
        <div className="h-[70px] bg-gray-200  flex  ">
            <h1 className=" m-4 text-2xl shadow-slate-500  w-[250px] ">Movies Search</h1>
            <div className="w-[100%] flex-wrap">
            <ul className=" ml-auto pt-6 flex justify-end ">
                <li onMouseEnter={banerhandle} onMouseLeave={banerhandels} className="mr-8 text-right hover:visible" > Telugu{ baner?<BannerHead />:" " }</li>
                <li className="mr-8 text-right`"> English </li>
                <li className="mr-8 text-right"> Hindi </li>
                <li className="mr-12 text-right"> genre </li>
            </ul>
            </div>
        </div>
    )
}
export default Headders;