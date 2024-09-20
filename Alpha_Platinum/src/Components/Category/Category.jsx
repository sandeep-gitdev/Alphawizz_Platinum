
import axios from "axios";
import { useEffect, useState } from "react";


const Category = () => {

         const [data, setData] = useState([]);
         const [loading, setLoading] = useState(true);
         const [error, setError] = useState('');
         
         useEffect(() => {
                const fetchApi = async () => {
                    try {
                       const response = await axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_categories');
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

         return (
          <>
               <div className="m-10">
                   <div className="text-center mb-14  text-5xl">
                       Category
                   </div>   
                           
                       <div className="flex flex-wrap justify-around gap-16 ">
                           
                             {
                                  data.map((items,id) => {
                                    return(
                                      <div key={id} className="">
                                      <img className="flex justify-center border-2 border-[#49A6A2] rounded-full w-40 h-40"  src={items.image} alt={items.name} />

                                      <p className="text-center mt-5 ">{items.name}</p>

                                      </div>
                                    )
                                 })

                             }

                        </div>
               </div>
          </>
       )

         
    }

    

export default Category;