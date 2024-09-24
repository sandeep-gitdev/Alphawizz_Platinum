import { useLocation } from "react-router-dom";

const FilterCategory = () => {
    
            const Location =  useLocation();
            const filterData =  Location.state

      return (
          <>
               <div className="main flex flex-col">
                    <div className="heading  ">
                         <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
                          <h1 className="text-xl">{filterData.name}</h1>
                          <div className="flex ">
                          <p>Home /</p>
                          <p>Category /</p>
                          <p>Products /</p>
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
                                      <img className=" border-2 border-[#49A6A2] rounded-full w-40 h-40"  src={item.image} alt="" />
                                   
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