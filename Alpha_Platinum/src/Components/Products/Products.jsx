import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import axios from "axios";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Products = () => {

   const [Products, setData] = useState([]);
         const [loading, setLoading] = useState(true);
         const [error, setError] = useState('');
         
         useEffect(() => {
                const fetchApi = async () => {
                    try {
                       const response = await axios.get('https://fakestoreapi.com/products');
                       console.log(response)
                       setData(response.data);
                    } catch (err) {
                      setError('Error fetching data');
                    } finally {
                       setLoading(false);
                    }
                };

                fetchApi();

         },[]);

         

         if (loading) return <p>Loading...</p>
         if (error) return <p>{error}</p>
      
          return (
            <>
                
                <hr className=""/>
                   <div className="flex  flex-col m-8">
                     
                     <h2 className="text-4xl font-bold ">New One</h2>
                       <div className="flex justify-between">
                          <p className="text-gray-500 text-lg">special offer</p>
                         <p className="text-[#49A6A2] text-lg font-bold">View More</p>
                         
                      </div>
                         <hr className=" mt-3"/>
                   </div>


               
                   <div className="">

                   <Swiper 
                           slidesPerView={6}
                                    spaceBetween={30}
                                    centeredSlides={false}
                                    autoplay={{
                                      delay: 2000,
                                      disableOnInteraction: false,
                                    }}
                                    pagination={{
                                      clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    >

                      {

                        Products.map((product,id) => {
                              return (

                                 <SwiperSlide>
                                 <div className="m-1 flex items-center justify-center flex-col border-2 border-grey w-auto rounded-md h-[350px] relative">
                                   
                               <div className="">
                        <div key={id} className="h">
                         <img src={product.image} alt="" className="h-36 w-40"/>
                         </div>
                  <div className=" flex gap-16 w-64  absolute top-3 left-2">
                         <p className="bg-[#49A6A2] text-white rounded-r-lg text-md px-2" >5% OFF</p>
                         <FaRegHeart className='ml-8 text-gray-500'/>
                         </div>
                   
                      <div className="flex flex-col items-center">
                           <p className="p-1 text-md mt-5">{product.title.trim().slice(0, 20)}</p>
                           <p className="text-lg ">₹{product.price}</p>
                           <div className="">
                           <button className="flex items-center border rounded-lg bg-[#49A6A2]  text-white p-2 px-4">
                              <div className="">
                              <FaCartPlus />
                              </div>Add to Cart</button>
                           </div>
                      </div>
                   </div>
                               
                   </div>      
                   </SwiperSlide>
                              )
                              
                        })
                      }

                      </Swiper>


              </div>

            </>
         )
          
}

export default Products;