import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogModal from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const closeModal = () => setLoginModal(false);
  const [serachField, setSerachField] = useState("");

  const [categoryData, setCategoryData] = useState([]);
  const [filter, setProductFilter] = useState([]);


  const [productData, setProductsData] = useState([]);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .post(
        "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories"
      )
      .then((response) => {
        setCategoryData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .post("https://alphasilver.productsalphawizz.com/app/v1/api/get_products")
      .then((response) => {
        setProductsData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  function handleClick(e) {
    console.log(e.target.name);
    const navData = categoryData.find((item) => {
      return item.name == e.target.name;
    });
    console.log(navData);
    navigate("/FilterCategory", { state: navData });
  }

  function handleSearch(e) {
    const field = e.target.value.toLowerCase();
    if (field !== "") {
    const filtered = productData.filter((product) =>product.name.toLowerCase().includes(field));
    console.log(filtered);
    setProductFilter(filtered);
  } else {
      setProductFilter([]);
  }

  }

  return (
    <>
      {/* header main div */}
      <div className="flex flex-col md:flex-row items-center justify-between m-2">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <Link to="/">         
            <img
              className="max-w-[10rem] max-h-16 cursor-pointer"
              src="Alpha_logo.png"
              alt="company_logo"
            />
          </Link>
         
          {/* serach functionality */}
         <div className="">
            <div className="flex justify-between relative border border-black p-3 rounded-xl w-full  md:w-[500px] opacity-40 bg-gray-200">
              <input
                id=""
                type="text"
                name="serach"
                placeholder="Search for products"
                onChange={handleSearch}
                className="bg-gray-200 border-none outline-none w-full"
              />
              <IoSearch className="text-xl cursor-pointer" />
            </div>

           { filter.length > 0 &&
          <div className="h-96 absolute bg-white z-50 overflow-scroll ">
          { 
            filter.map((item)=>             
                <div  className="flex items-center p-4 gap-4">
                  <img src={item.image} alt="" className="h-16 w-24" />
                  {item.name}
                </div>                          
            )
          }
            </div>                     
           }

        
          </div>
          </div>

                 {/* user login */}
          <div className="flex items-center gap-5 mr-4">
            {/* <button className="border-2 text-[#49A6A2] border-[#49A6A2] rounded-md p-2" onClick={() => setLoginModal(true)}>Login</button> */}

            {userData ? (
              <div className="flex items-center gap-2 me-3">
                <FaUserAlt className="h-16 w-6 rounded-full cursor-pointer" />

                <span>Hello {userData.username}</span>
                <FaPowerOff
                  onClick={() => {
                    localStorage.removeItem("user"), navigate("/");
                  }}
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <button
                className="login-button"
                onClick={() => setLoginModal(true)}
              >
                Login
              </button>
            )}

            <FaRegHeart className="text-[#49A6A2] text-2xl cursor-pointer" />
            <FaCartPlus
              className="text-[#49A6A2] text-2xl 
                            cursor-pointer"
            />
          </div>
       
      </div>

         {/* navbar part */}
      <nav className=" bg-[#49A6A2] text-[#fff] p-1 mb-0 text-lg hidden md:flex  items-center justify-around">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <IoMenu />
          <Link to="/CategoryAll" className="hover:underline">
            <h4>Sell All</h4>
          </Link>
          <div className="h-[37px] border-2 ml-4 border-white"></div>
        </div>

        {[
          "Clothing",
          "Electronics",
          "Home & Kitchen",
          "Beauty & Personal Care",
          "Toys & Games",
          "Grocery & Gourmet Food",
          "Book",
        ].map((category) => (
          <button
            key={category}
            className="transform hover:translate-y-[-2px] hover:underline transition-transform duration-200 ease-in-out"
            name={category}
            onClick={handleClick}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* home page nav bar and image */}

      {loginModal && <LogModal closeModal={closeModal} />}
    </>
  );
};

export default Header;
