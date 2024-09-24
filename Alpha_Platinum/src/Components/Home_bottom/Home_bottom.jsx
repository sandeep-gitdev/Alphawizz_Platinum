import { FaArrowRight } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { RiRefreshLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";

 const Home_bottom = () => {

        return (
            <>
                 <hr className="text-gray-700 text-xl"/>
               <div className="flex flex-col ">
                     <div className="download_app  flex justify-center gap-6 items-center h-60 my-7">
                                  <div className="content px-5 flex justify-around items-center gap-4 border-2 rounded-md shadow-2xl">
                                    <div className="flex m-7">
                                        <img className="h-[80px]" src="./Home_bt_img/booking.png" alt="" />
                                        <div className="">
                                        <p className="font-bold text-3xl mb-2">Download App Now !</p>
                                        <p>Use code WELCOMEMMT and get FLAT 12% 0FF* on your first domestic flight booking</p>
                                        </div>
                                    </div>
                                    <div className="icon flex flex-col gap-4 w-[100px] h-[100px] mt-5">
                                      <img className="w-[100px]" src="./Home_bt_img/appstore-image.png" alt="" />
                                      <img className="" src="./Home_bt_img/playstore-image.png" alt="" />
                                    </div>
                                    <div className="m-4">
                                      <img className="w-[105px] h-[105px]" src="./Home_bt_img/QRCode.jpg" alt="" />
                                    </div>
                                 </div>
                     </div>

                        <div className="free bg-[#49A6A2] grid grid-cols-4 place-items-center text-white h-40 p-3">
                               <div className="flex items-center gap-4">
                                <div className="text-4xl">
                               <FaShippingFast className=""/>
                               </div>
                                  <div className="">
                                  <p className="font-bold text-xl">Fast shipping</p>
                                  <p>Fast shipping at your door step.</p>
                                  </div>
                               </div>
                               <div className="flex items-center gap-4">
                               <div className="text-4xl">
                               <RiRefreshLine />
                               </div>
                                  <div className="">
                                  <p className="font-bold text-xl">Free Returns</p>
                                  <p>Fast return if products are damaged.</p>
                                  </div>
                               </div>
                               <div className="flex items-center gap-4">
                               <div className="text-4xl">
                                   <FaPhoneVolume />
                                   </div>
                                   <div className="">
                                  <p className="font-bold text-xl">Support 24/7</p>
                                  <p>24/7 and 365 days support is available.</p>
                                  </div>
                               </div>
                               <div className="font-bold text-xl flex items-center gap-2">
                                  <FaArrowRight />
                                  <p>Seller Loging</p>
                                
                               </div>
                       </div>
               </div>
            </>
        )
   }

   export default Home_bottom;