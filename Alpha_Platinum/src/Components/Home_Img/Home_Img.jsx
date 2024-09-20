import { IoMenu } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";

import { MdOutlineArrowBackIos } from "react-icons/md";


const Home_Img = () => {
   
         return (
            <>
               <div className="">
                    
                    <div className="relative">
                   
                      <img src="./Home-imgs/home-1.png" alt="" />
                      <div className=" absolute inset-0 flex items-center justify-between text-2xl">
                        <MdOutlineArrowBackIos className="border-2 rounded-lg bg-gray-300"/>
                        <MdOutlineNavigateNext className="border-2 rounded-lg bg-gray-300"/>

                      
                      </div>
                    </div>
               </div>
            </>
         )
}

  export default Home_Img;