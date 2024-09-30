import { FaArrowRight } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";

 const Home_bottom = () => {

        return (
            <>
                 <hr className="text-gray-700 text-xl"/>
               <div className="flex flex-col ">
                     <div className="download_app  flex flex-col items-center h-auto my-7 ">
                                  <div className="content flex flex-col sm:flex-row justify-between items-center px-4 gap-4 border-2 rounded-md shadow-2xl">
                                    <div className="flex items-center gap-4 w-full sm:w-auto">
                                        <img className="h-[80px] sm:h[100px]" src="./Home_bt_img/booking.png" alt="" />
                                        <div className="">
                                        <p className="font-bold text-3xl sm:text-3xl mb-2">Download App Now !</p>
                                        <p className="text-sm sm:text-base">Use code WELCOMEMMT and get FLAT 12% 0FF* on your first domestic flight booking</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center sm:items-center">
                                    <div className="icon flex flex-col gap-2 mt-4 sm:mt-0">
                                      <img className="w-[100px] hover:scale-105 sm:w-[120px]" src="./Home_bt_img/appstore-image.png" alt="" />
                                      <img className="hover:scale-105 w-[100px] sm:w-[120px]" src="./Home_bt_img/playstore-image.png" alt="" />
                                    </div>
                                    <div className="m-4">
                                      <img className="w-[105px] h-[105px]" src="./Home_bt_img/QRCode.jpg" alt="" />
                                    </div>
                                    </div>
                                 </div>
                     </div>

                        <div className="free bg-[#49A6A2] grid grid-cols-1 sm:grid-cols-2 md:gap-4  md:grid-cols-4 place-items-center text-white h-auto p-3">
                            <div className="flex items-center flex-col text-center gap-4 ">
                                <div className="text-4xl">
                               <FaShippingFast className=""/>
                               </div>
                                  <div className="">
                                  <p className="font-bold text-xl">Fast shipping</p>
                                  <p className="">Fast shipping at your door step.</p>
                                  </div>
                            </div>
                               <div className="flex items-center flex-col text-center gap-4">
                               <div className="text-4xl">
                               <RiRefreshLine />
                               </div>
                                  <div className="">
                                  <p className="font-bold text-xl">Free Returns</p>
                                  <p>Fast return if products are damaged.</p>
                                  </div>
                               </div>
                               <div className="flex items-center flex-col text-center gap-4">
                               <div className="text-4xl">
                                   <FaPhoneVolume />
                                   </div>
                                   <div className="">
                                  <p className="font-bold text-xl">Support 24/7</p>
                                  <p>24/7 and 365 days support is available.</p>
                                  </div>
                               </div>
                               <div className="font-bold text-xl flex items-center flex-col text-center gap-2">
                                  <FaArrowRight />
                                  <p>Seller Loging</p>
                                
                               </div>
                       </div>
               </div>
            </>
        )
   }

   export default Home_bottom;