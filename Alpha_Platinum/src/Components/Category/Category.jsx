
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from "react-router-dom";


const Category = () => {

         const [data, setData] = useState([]);
         const [loading, setLoading] = useState(true);
         const [error, setError] = useState('');

         const navigate = useNavigate();
         
         useEffect(() => {
                const fetchApi = async () => {
                    try {
                       const response = await axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_categories');
                       console.log(response.data)
                       setData(response.data.data);
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

          function handleImageClick (e) {
                console.log(e.target.id);
                const filterProduct = data.find((item)=>{return item.id==e.target.id})
                navigate("/FilterCategory" , {state: filterProduct})
           };

         return (
          <>
               <div className="m-10 ">
                   <div className="text-center mb-14  text-5xl">
                       Category
                   </div>   
                           
                       <div className="">
                           
                       <Swiper 
                                  autoplay={{
                                                delay: 1000,
                                                disableOnInteraction: true,
                                              }}
                                   pagination={{
                                    clickable: true,
                                  }}
                                  breakpoints={{
                                    640: {
                                      slidesPerView: 2,
                                      spaceBetween: 20,
                                    },
                                    768: {
                                      slidesPerView: 4,
                                      spaceBetween: 40,
                                    },
                                    1024: {
                                      slidesPerView: 6,
                                      spaceBetween: 10,
                                    },
                                  }}
                                  navigation={true}
                                  modules={[Navigation,Autoplay,Pagination]}
                                  className="mySwiper"
                      
                                    >
                             {

                              
                                  data.map((items,id) => {
                                    return(


                                      <SwiperSlide key={id}>
                                      <div  className="h-64 flex flex-col items-center">
                                      <img className=" border-2 border-[#49A6A2] rounded-full w-40 h-40"  src={items.image} alt={items.name} id={items.id} onClick={handleImageClick}/>
                                   
                                      <p className="">{items.name}</p>
                                      </div>

                                    
                                      </SwiperSlide>
                                    )
                                 })

                             }

                        </Swiper>

                        </div>
               </div>
               <hr />
          </>
       )

         
    }

export default Category;