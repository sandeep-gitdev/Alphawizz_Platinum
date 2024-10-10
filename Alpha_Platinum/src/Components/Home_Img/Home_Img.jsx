import { IoMenu } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";

import { MdOutlineArrowBackIos } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Img} from "./Img_Data.json"
 

const Home_Img = () => {
   
         return (
            <>
               <div className="h-3/4">
                    
                    <div className="">
                         
                      

                                    <Swiper
                                    spaceBetween={3}
                                    centeredSlides={true}
                                    autoplay={{
                                      delay: 2500,
                                      disableOnInteraction: false,
                                    }}
                                    pagination={{
                                      clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper "
                                    >
                                    <SwiperSlide><img src="./Home-imgs/home-1.png" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="./Home-imgs/home-2.jpg" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="./Home-imgs/home-3.jpg" alt="" /></SwiperSlide>
                                    
                                    </Swiper>                   
                    </div>
               </div>
            </>
         )
}

  export default Home_Img;


   
