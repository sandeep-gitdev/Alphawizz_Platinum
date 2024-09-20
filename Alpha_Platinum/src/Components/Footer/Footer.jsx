import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { SlSocialYoutube } from "react-icons/sl";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";



const Footer = () => {
     
   return (
     <> 
       <div className="footer flex flex-col bg-[#1f2136] text-[#fff] ">
            <div className="footer-info grid grid-cols-3 m-20 gap-8">
              <div className="flex justify-center">
                  <img className="max-w-40 max-h-16 cursor-pointer" src="Alpha_logo.png" alt="company_logo" />
                  </div>
                  <div className="">
                    <h3 className=" font-bold text-xl">Get to Know Us</h3>
                      <div className="border-2 w-12 my-5 border-[#49A6A2]"></div>
                  <ul className="grid grid-cols-2 gap-3 cursor-pointer">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Register</li>
                    <li>Contact Us</li>
                    <li>Category</li>
                    <li>Login</li>
                    <li>About Us</li>
                    <li>Sellers</li>
                  </ul>
                  </div> 

                  <div className="flex flex-col px-2 gap-5">
                    <h3 className="font-bold text-xl">Connect with Us</h3>
                    
                    <div className="icons flex gap-12 cursor-pointer">
                      <div className="bg-[#3d5a9c] text-3xl rounded-full p-2">
                    <TbBrandFacebook className="  "/></div>
                    <div className="bg-[#1ba1ee] text-3xl rounded-full p-2">
                    <SlSocialTwitter className=""/></div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-3xl rounded-full p-2 ">
                    <BsInstagram className=""/>
                    </div>
                    <div className="text-3xl bg-red-600 rounded-full p-2">
                    <SlSocialYoutube className=""/>
                    </div>
                    </div>

                  <div className="flex gap-5">
                    <button className="flex items-center border rounded-lg bg-white text-black px-3">
                      <div className="text-4xl">
                    <BsApple className=""/>
                    </div>
                    <div className="ml-2">
                    <p className="text-[12px]">Download on the</p>
                    <p>App Store</p>
                    </div>
                    </button>

                    <button className="flex items-center border rounded-lg bg-white text-black px-3">
                    <div className="text-4xl">
                    {/* <IoLogoGooglePlaystore className=""/> */}
                    <img src="playstore.png" alt="" className="min-w-14 h-14 p-2"/>
                    </div>
                    <div className="ml-2">
                     <p className="text-[12px]">GET IT ON</p>
                     <p>Google Play</p>
                     </div>
                    </button>
                    </div>
                  </div>
            </div>
          <hr />  
            <div className="copy-right flex justify-around m-4">
                <p>Copyright © 2024, All Right Reserved Alpha Platinum Private Limited</p>
                <ul className="flex gap-4">
                  <li>Home</li>
                  <li>Terms & Condition</li>
                  <li>Privacy Policy</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
            </div>
        </div>   
      
      </>
   )
}

export default Footer;