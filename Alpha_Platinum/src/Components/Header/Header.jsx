import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";



const Header = () => {
   
          return (
             <>
                 <div className="flex items-center justify-between m-5">
                    <div className="flex items-center gap-6">
                       <img className="max-w-40 max-h-16 cursor-pointer" src="Alpha_logo.png" alt="company_logo" />
                       
                       <div className="flex justify-between border border-black p-3 rounded-xl w-[700px] opacity-40 bg-gray-200">
                       <input  type="text" placeholder="Search for products" className="bg-gray-200 cursor-pointer"/>
                       <IoSearch className="text-xl"/>
                       </div>
                       </div>

                       <div className="flex items-center gap-5 mr-4">
                            <button className="border-2 text-[#49A6A2] border-[#49A6A2] rounded-md p-2">Login</button>
                            <FaRegHeart className="text-[#49A6A2] text-3xl cursor-pointer" />
                            <FaCartPlus className="text-[#49A6A2] text-3xl cursor-pointer" />
                       </div>

                 </div>

                 <nav className=" bg-[#49A6A2] text-[#fff] p-2 text-lg flex items-center justify-around">
                       <div className="flex items-center gap-2">
                       <IoMenu />
                         <h4>Sell All</h4>
                         <div className="h-12 border-2 ml-4 border-white"></div>
                       </div>
                       <div className="">Clothing</div>
                    
                       <div className="">Electronics</div>
                       <div className="">Home & Kitchen</div>
                       <div className="">Beauty & Personal Care</div>
                       <div className="">Toys & Games</div>
                       <div className="">Grocery & Gourment Food</div>
                       <div className="">Book</div>
                    </nav>

                   {/* home page nav bar and image */}


             </>
          )
}

export default Header;