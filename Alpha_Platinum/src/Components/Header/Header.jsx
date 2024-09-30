import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogModal from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Header = () => {
    
         const [loginModal, setLoginModal] = useState(false);
         const closeModal = () => setLoginModal(false);

         const [data, setData] = useState([]);
         const navigate = useNavigate();

         useEffect(() => {
                   axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_categories')
                   .then(response => {
                        console.log(response.data)   
                        setData(response.data.data); 
                   }).catch(err=>{
                        console.log(err);
                        
                   })
     },[]);



    function handleClick(e){
      console.log(e.target.name);
      const navData = (data.find((item)=>{return item.name==e.target.name}))
      console.log(navData)
      navigate("/FilterCategory" , {state: navData})
    }

                
   
          return (
             <>
            
                 <div className="flex flex-col md:flex-row items-center justify-between m-2">
               <Link to='/'>    <div className="flex items-center gap-6 mb-4 md:mb-0">
                       <img className="max-w-[10rem] max-h-16 cursor-pointer" src="Alpha_logo.png" alt="company_logo" />
                       
                       <div className="flex justify-between border border-black p-3 rounded-xl w-full  md:w-[500px] opacity-40 bg-gray-200">
                       <input  type="text" placeholder="Search for products" className="bg-gray-200 border-none outline-none w-full" />
                       <IoSearch className="text-xl"/>
                       </div>
                       </div>  </Link> 

                       <div className="flex items-center gap-5 mr-4">
                       <button className="border-2 text-[#49A6A2] border-[#49A6A2] rounded-md p-2" onClick={() => setLoginModal(true)}>Login</button>
                            
                            <FaRegHeart className="text-[#49A6A2] text-2xl cursor-pointer" />
                            <FaCartPlus className="text-[#49A6A2] text-2xl 
                            cursor-pointer" />
                       </div>

                 </div>

                 <nav className=" bg-[#49A6A2] text-[#fff] p-1 mb-0 text-lg hidden md:flex  items-center justify-around">
                       <div className="flex items-center gap-2 mb-2 md:mb-0">
                       <IoMenu />
                        <Link to="/CategoryAll" className="hover:underline"><h4>Sell All</h4></Link> 
                         <div className="h-[37px] border-2 ml-4 border-white"></div>
                       </div>
                       
                       {['Clothing', 'Electronics', 'Home & Kitchen', 'Beauty & Personal Care', 'Toys & Games', 'Grocery & Gourmet Food', 'Book'].map((category) => (
                         <button
                         key={category}
                         className="transform hover:translate-y-[-2px] hover:underline transition-transform duration-200 ease-in-out"
                         name={category}
                         onClick={handleClick}
                         >
                         {category}
                         </button>
                        ))}
                 

                       {/* <button className="hover:underline" name="Clothing" onClick={handleClick}>Clothing</button>             
                       <button className="hover:underline" name="Electronics" onClick={handleClick}>Electronics</button>             
                       <button className="hover:underline" name="Home & Kitchen" onClick={handleClick}>Home & Kitchen</button>             
                       <button className="hover:underline transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out" name="Beauty & Personal Care" onClick={handleClick}>Beauty & Personal Care</button>             
                       <button className="hover:underline" name="Toys & Games" onClick={handleClick}>Toys & Games</button>             
                       <button className="hover:underline" name="Grocery & Gourmet Food" onClick={handleClick}>Grocery & Gourment Food</button>             
                       <button className="hover:underline" name="Book" onClick={handleClick}>Book</button>              */}
                      
                    </nav>

                   {/* home page nav bar and image */}

                   {loginModal && <LogModal closeModal={closeModal}/>}

                   {/*  */}
             </>
          )
}

export default Header;