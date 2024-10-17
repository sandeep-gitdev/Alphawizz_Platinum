import { FaRegHeart, FaCartPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {useDispatch} from 'react-redux'
import { addCartData } from "../Redux/cardSlice";


const Products = () => {
  const [productsData, setProductsData] = useState([[], [], []]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // const [cart, setCart] = useState([]); // State to hold cart items
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "https://alphasilver.productsalphawizz.com/app/v1/api/get_sections"
        );
        const productSections = response.data.data.map(section => section.product_details);
        setProductsData(productSections);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleImageClick = (productId) => {
    const product = productsData.flat().find(item => item.id === productId);
    if (product) {
      navigate("/ShoppingCart", { state: product });
    }
  };

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
     dispatch (addCartData(product))
      //  console.log(product)
      navigate("/Add_To_Card")  // redirect to addcart component
  };

  return (
    <>
      {productsData.map((section, index) => (
        <div key={index} className="m-auto">
          <div className="flex flex-col m-8">
            <h2 className="text-4xl font-bold">New One {index + 1}</h2>
            <div className="flex justify-between">
              <p className="text-gray-500 text-lg">Special Offer</p>
              <p className="text-[#49A6A2] text-lg font-bold">View More</p>
            </div>
            <hr className="mt-3" />
          </div>

          {index < 3 ? (
            <Swiper
              autoplay={index === 0 ? { delay: 1000, disableOnInteraction: true } : false}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 10 },
              }}
              navigation
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
            >
              {section.map(product => (
                <SwiperSlide key={product.id}>
                  <ProductCard 
                    product={product} 
                    onImageClick={handleImageClick} 
                    onAddToCart={handleAddToCart} // Pass the function
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex flex-wrap justify-center">
              {section.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onImageClick={handleImageClick} 
                  onAddToCart={handleAddToCart} // Pass the function
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

const ProductCard = ({ product, onImageClick, onAddToCart }) => (
  <div className="mx-4 flex items-center justify-center flex-col border-2 border-grey w-auto rounded-md h-[300px] relative">
    <img
      src={product.image}
      alt={product.name}
      className="h-36 w-40 cursor-pointer"
      onClick={() => onImageClick(product.id)}
    />
    <div className="flex gap-16 w-64 absolute top-3 left-2">
      <p className="bg-[#49A6A2] text-white rounded-r-lg text-md px-2">{product.min_max_price.discount_in_percentage}% OFF</p>
      <FaRegHeart className="ml-24 text-gray-500" />
    </div>
    <div className="flex flex-col items-center transform hover:translate-y-[-4px] transition-transform duration-200 ease-in-out">
      <p className="p-1 text-md mt-5">{product.name}</p>
      <p className="text-lg">₹{product.min_max_price.max_special_price.toFixed(2)}</p>
      <button
        className="flex gap-2 items-center active:scale-50 rounded-lg bg-[#49A6A2] text-white py-1 px-2"
        onClick={() => onAddToCart(product)} // Trigger the add to cart function
      >
        <FaCartPlus />
        <p>Add to Cart</p>
      </button>
    </div>
  </div>
);

export default Products;
