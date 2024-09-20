import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


const Products = () => {
      
          return (
            <>
               <div className="">
                   <div className="">
                         <img src="Rice.jpg" alt="" />
                         <p>0% OFF</p>
                         <FaRegHeart  />
                   </div>
                      <div className="">
                           <p>Poha</p>
                           <p>₹ 262.49</p>
                           <button><FaCartPlus />Add to Cart</button>
                      </div>
                   </div>
            </>
          )
}

export default Products;