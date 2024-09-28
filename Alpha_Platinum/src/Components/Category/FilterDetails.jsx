import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const FilterDetails = () => {

           const Location =  useLocation();
           const filterItems =  Location.state;
           console.log(filterItems);


       
   return(
       <>  
        <div className="heading  ">
                         <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
                          <h1 className="text-xl">{filterItems[0].category_name}</h1>
                          <div className="flex ">
                          <p>Home /</p>
                          <p>Category /</p>
                          <p>Products </p>
                          </div>
                         </div>
        </div>        


                   <div className="">
                      <div className=" flex justify-center m-10">
                      <div className="w-[1260px] h-[550px] border-2 rounded-md shadow-2xl flex flex-col justify-center">   
                        <div className="flex justify-between items-center m-10 p-1">
                           <div className="flex items-center gap-2">
                        <label htmlFor="">Sorty By:</label>
                         <select name="" id="" className="border-2">
                             <option >Relevance</option>
                             <option value="">Top Rated</option>
                             <option value="">Newest First</option>
                             <option value="">Oldest First</option>
                             <option value="">Price - Low To High </option>
                             <option value="">Price - High To Low </option>
                             <FaCaretDown />
                         </select>
                         
                         </div>
                         <div className="flex items-center ">
                           <p>Show:</p>
                           <div className="flex items-center pl-2">
                           <p>12 </p><IoMdArrowDropdown />
                           </div>
                           </div>   
                         </div>

                         <div className="ml-14 mt-6">
                         <p className="text-lg font-semibold">Prouducts</p>
                         </div>

                         <div className="flex m-5 justify-around">
                             
                     {

                        filterItems.map((filter,id) => {
                                   return (
                                      <>
                                      
                   <div key={id} className=" border-2 border-grey w-58 rounded-md h-[300px] p-8 relative">        
                         <div key={filter.id} className="">
                          <img src={filter.image} alt="" className="h-36 w-40"/>
                          </div>
                        <div className=" flex gap-16 w-64  absolute top-3 left-2">
                          <p className="bg-[#49A6A2] text-white rounded-r-lg text-md px-2" >5% OFF</p>
                          <FaRegHeart className='ml-8 text-gray-500'/>
                        </div>
                    
                        <div className="flex flex-col items-center">
                            <p className="p-1 text-md mt-5">{filter.name}</p>
                            <p className="text-lg ">₹{filter.min_max_price.special_price}</p> 
                             <div className="">
                               <button className="flex items-center border rounded-lg bg-[#49A6A2]  text-white p-2 px-4">
                               <div className="">
                               <FaCartPlus />
                               </div>Add to Cart</button>
                            </div>
                       </div>
                    </div>            
                                      </>
                                   )
                        })
                     }
                     </div>  
                </div>

                </div>       
                </div>  
               </>
   )
}

export default FilterDetails;

