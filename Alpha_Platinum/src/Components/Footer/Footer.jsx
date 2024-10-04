import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";



const Footer = () => {
     
   return (
     <> 
       <div className="footer flex flex-col  bg-[#1f2136] text-[#fff] ">
            <div className="footer-info grid grid-cols-1 md:grid-cols-3 m-4 gap-8">
              <div className="flex justify-center">
                  <img className="max-w-[10rem] max-h-16 cursor-pointer" src="Alpha_logo.png" alt="company_logo" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className=" font-bold text-xl">Get to Know Us</h3>
                      <div className="border-2 w-12 my-5 border-[#49A6A2]"></div>
                  <ul className="grid grid-cols-2 gap-3 cursor-pointer">
               <Link to="/"><li>Home</li></Link>     
               <Link to="/Prouducts"><li>Products</li></Link> 
               <Link to="/Login">   <li>Register</li></Link> 
               <Link to="/ContactUs"><li>Contact Us</li></Link>  
               <Link to="/CategoryAll"><li>Category</li></Link> 
               <Link to="/Login"><li>Login</li></Link>     
               <Link to="/About_Us"><li>About Us</li></Link>  
                    <li>Sellers</li>
                  </ul>
                  </div> 

                  <div className="flex flex-col px-2 gap-5">
                    <h3 className="font-bold text-xl">Connect with Us</h3>
                    
                    <div className="icons flex gap-5 cursor-pointer">
                <a href="https://www.facebook.com/" target="_blank"> <div className="bg-[#3d5a9c] hover:scale-105 text-3xl rounded-full p-2 ">
                    <TbBrandFacebook className="  "/></div></a>
                    <a href="https://x.com/" target="_blank"><div className="bg-[#1ba1ee] hover:scale-105 text-3xl rounded-full p-2">
                    <SlSocialTwitter className=""/></div></a> 
                    <a href="https://www.instagram.com/" target="_blank"><div className="bg-gradient-to-r from-purple-500 to-pink-500 text-3xl rounded-full p-2 hover:scale-105 ">
                    <BsInstagram className=""/>
                    </div></a> 
                    <a href="https://www.youtube.com/" target="_blank"> <div className="text-3xl bg-red-600 hover:scale-105 rounded-full p-2">
                    <SlSocialYoutube className=""/>
                    </div></a>   
                    </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <button className="flex items-center hover:scale-105 border rounded-lg bg-white text-black px-3 w-full md:w-auto sm:w-auto  max-w-[200px]">
                      <div className="text-4xl">
                    <BsApple className=""/>
                    </div>
                    <div className="ml-2 text-left">
                    <p className="text-xs md:text-md sm:text-sm">Download on the</p>
                    <p>App Store</p>
                    </div>
                    </button>

                    <button className="flex items-center hover:scale-105 border rounded-lg bg-white text-black px-3 w-full sm:w-auto">
                    <div className="text-4xl">
                    {/* <IoLogoGooglePlaystore className=""/> */}
                    <img src="playstore.png" alt="" className="min-w-14 h-14 p-2"/>
                    </div>
                    <div className="ml-2 text-left">
                     <p className="text-xs md:text-md  sm:text-sm">GET IT ON</p>
                     <p className="">Google Play</p>
                     </div>
                    </button>
                    </div>
                  </div>
            </div>
          <hr />  
            <div className="copy-right flex flex-col md:flex-row justify-around m-4">
                <p>Copyright © 2024, All Right Reserved Alpha Platinum Private Limited</p>
                <ul className=" gap-4 justify-center hidden md:flex">
                <Link to="/"><li>Home</li></Link>
                <Link to='/Term_condition'><li>Terms & Condition</li></Link> 
                 <Link to="/Privacy_Policy"> <li>Privacy Policy</li></Link>
                 <Link to="/About_Us"><li>About Us</li></Link>
                 <Link to="/ContactUs"><li>Contact Us</li></Link>
                </ul>
            </div>
        </div>   
      
      </>
   )
}

export default Footer;