import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState, useEffect, } from "react";

const FilterCategory = () => {
    
            const Location =  useLocation();
            const filterData =  Location.state
             console.log(filterData)

              // for  Product Api item details  
               
            const navigate = useNavigate();

            const [data, setData] = useState([]);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState('');
         

            useEffect(() => {
                   const fetchApi = async () => {
                       try {
                          const response = await axios.post('https://alphasilver.productsalphawizz.com/app/v1/api/get_products');
                          console.log(response.data.array)
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
               const filterElement = (data.filter((item)=>{return item.category_id==e.target.id}))
               console.log(filterElement)
               navigate("/FilterDetails" , {state: filterElement})
          };

      return (
          <>
               <div className="main flex flex-col">
                    <div className="heading  ">
                         <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
                          <h1 className="text-xl">{filterData.name}</h1>
                          <div className="flex ">
                          <p>Home /</p>
                          <p>Category /</p>
                          <p className="text-gray-500">Products </p>
                          </div>
                         </div>
                    </div>
                    <div className="m-10 border-2 rounded-md shadow-2xl p-6">
                         <h1 className="mb-4 text-2xl">{filterData.name} Category</h1>

                         <div className="images flex   border-2 rounded-md shadow-2xl">
                         {
                              filterData.children.map((item,id) => {
                                          return (
                                             <>
                                           
                                               <div key={id} className="h-64 pt-6 mx-6">
                     <img className=" border-2 border-[#49A6A2] rounded-full w-40 h-40"  src={item.image} alt=""
                     id={item.id} onClick={handleImageClick}/>
                                   
                                      <p className=" text-center mt-5 ">{item.name}</p>
                                      </div>
                                      
                                        
                                    </>
                                             
                                  )
                              })
                         
                         }
                         </div>
                    </div>
               </div>
           </>
      )
}

export default FilterCategory;