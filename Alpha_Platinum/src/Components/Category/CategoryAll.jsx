import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CategoryAll = () => {
     
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
    navigate("/FilterCategory", {state: filterProduct})
};

       return (
          <>

        <div className="text-center m-14 ">
                   <h1 className="text-3xl font-semibold m-4">Category</h1>
                   <hr />
                   <div className="flex flex-wrap justify-center gap-16 items-center mt-7">

               {                 
                  data.map((items,id) => {
                    return(
                      <div key={id} className="h-64">
                      <img className=" border-2 border-[#49A6A2] rounded-full w-40 h-40"  src={items.image} alt={items.name} id={items.id} onClick={handleImageClick}/>          
                      <p className=" text-center mt-5 ">{items.name}</p>
                      </div>     
                      
                    )
                 })
               }

                 </div>
               </div>
          
          </>
       )
}

export default CategoryAll;