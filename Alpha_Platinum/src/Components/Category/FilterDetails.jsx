import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";



const FilterDetails = () => {
       
   return(
       <>
       <div className="main h-1/2">
       <div className="heading  ">
                         <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
                          <h1 className="text-xl">name</h1>
                          <div className="flex ">
                          <p>Home /</p>
                          <p>Category /</p>
                          <p>Products /</p>
                          </div>
                         </div>
                    </div>

                    <div className="border-2 border-red-500 flex justify-center gap-12 p-6 h-[620px] ">
                         <div className="border-2 border-yellow-400 w-[330px] h-[570px]">
                         <h1>size</h1>
                         </div>

                         <div className="border-2 border-black w-[930px] h-[570px] m-7">
                          <p>relevence</p>

                          <div className="m-8">product</div>
                          <div className="m-1 flex items-center justify-center flex-col border-2 border-grey w-48 rounded-md h-44 relative">
                                   
                                   <div className="">
                            <div className="">
                             <img src="" alt="" className="h-40 w-44"/>
                             </div>
                      <div className=" flex gap-16 w-64  absolute top-3 left-2">
                             <p className="bg-[#49A6A2] text-white rounded-r-lg text-md px-2" >5% OFF</p>
                             <FaRegHeart className='ml-8 text-gray-500'/>
                             </div>
                       
                          <div className="flex flex-col items-center">
                               <p className="p-1 text-md mt-5">shrit</p>
                               <p className="text-lg ">₹ 150</p>
                               <div className="">
                               <button className="flex items-center border rounded-lg bg-[#49A6A2]  text-white p-2 px-4">
                                  <div className="">
                                  <FaCartPlus />
                                  </div>Add to Cart</button>
                               </div>
                          </div>
                       </div>
                                   
                       </div>      
                         </div>
                    </div>

                
       </div>
       </>
   )
}

export default FilterDetails;