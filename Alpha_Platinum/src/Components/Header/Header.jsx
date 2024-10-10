import {
  FaRegHeart,
  FaCartPlus,
  FaUserAlt,
  FaPowerOff,
  FaBoxOpen,
  FaUserCircle,
  FaUserCheck,
  FaInfo,
} from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMenu, IoClose, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LogModal from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const closeModal = () => setLoginModal(false);
  const [sidebar, setSideBar] = useState(false);

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

  // on click navigate to Filter category
  function handleClick(e) {
    console.log(e.target.name);
    const navData = categoryData.find((item) => {
      return item.name == e.target.name;
    });
    console.log(navData);
    navigate("/FilterCategory", { state: navData });
  }

  // serach on type
  function handleSearch(e) {
    const field = e.target.value.toLowerCase();
    if (field !== "") {
      const filtered = productData.filter((product) =>
        product.name.toLowerCase().includes(field)
      );
      console.log(filtered);
      setProductFilter(filtered);
    } else {
      setProductFilter([]);
    }
  }

  return (
    <>
      {/* header main div */}
      
      <div className="flex  md:flex-row items-center justify-between m-2">
        {/* hamburger */}
      <div className="md:hidden ">
      <AiOutlineBars className="cursor-pointer" size={'25px'} onClick={()=> setSideBar(true)}/>
      </div>
        <div className="flex justify-center items-center gap-5 mb-4 md:mb-0">
          <Link to="/">
            <img
              className="max-w-[10rem] h-auto md:max-h-16 cursor-pointer"
              src="Alpha_logo.png"
              alt="company_logo"
            />
          </Link>

          {/* Search input for md size */}
          <div className=" flex-col hidden md:block items-center w-full md:w-[500px]">
            <div className="relative w-full">
              <input
                type="text"
                name="search"
                placeholder="Search for products"
                onChange={handleSearch}
                className="bg-gray-200 border border-black rounded-xl p-3 opacity-40 w-full"
              />
              <IoSearch className="absolute right-3 top-3 text-xl cursor-pointer" />
            </div>

            {filter.length > 0 && (
              <div className="h-96 absolute bg-white z-50 overflow-scroll">
                {filter.map((item) => (
                  <div key={item.id} className="flex items-center p-4 gap-4">
                    <img src={item.image} alt="" className="h-16 w-24" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* loging cart faviort */}

        <div className="flex items-center gap-5 mr-4">
          {/* User login */}
          <div className="">
            {userData ? (
              <div className="flex items-center gap-2">
                <FaUserAlt className="h-16 w-6 rounded-full cursor-pointer" />
                <span>Hello {userData.username}</span>
                <FaPowerOff
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/");
                  }}
                  className="cursor-pointer"
                />
              </div>
            ) : (
              <button
                className="login-button hidden md:block"
                onClick={() => setLoginModal(true)}
              >
                Login
              </button>
            )}
          </div>

          {/* User login on small screens */}
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <FaRegHeart className="text-[#49A6A2] text-2xl cursor-pointer hidden md:block" />
            <FaCartPlus className="text-[#49A6A2] text-2xl cursor-pointer" />
          </div>
        </div>     
      </div>

         {/* Search input for sm size */}
         <div className="md:hidden flex-col items-center w-full md:w-[500px] p-8">
            <div className="relative w-full">
              <input
                type="text"
                name="search"
                placeholder="Search for products"
                onChange={handleSearch}
                className="bg-gray-200 border border-black rounded-xl p-3 opacity-40 w-full"
              />
              <IoSearch className="absolute right-3 top-3 text-xl cursor-pointer" />
            </div>

            {filter.length > 0 && (
              <div className="h-96 absolute bg-white z-50 overflow-scroll">
                {filter.map((item) => (
                  <div key={item.id} className="flex items-center p-4 gap-4">
                    <img src={item.image} alt="" className="h-16 w-24" />
                    {item.name}
                  </div>
                ))}
              </div>
            )}
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

      {/* Responisve sidebar */}
      {sidebar ? (
        <div className="bg-black/70 z-50 fixed inset-0 items-start w-full h-screen flex top-0 ">
          <div className="z-50 bg-white w-[240px] h-screen ">
            <div className="flex ">
              <IoClose
                className="top-3 left-52 absolute flex cursor-pointer"
                size={"25px"}
                onClick={() => setSideBar(false)}
              />
              <hr />
            </div>
            {/* Menu and category */}
            <div className=" m-4">
              {/* menu */}
              <div className="">
                <p className="border-b-2 w-16">MENU</p>
                <ul className="flex flex-col mt-2 gap-5">
                <Link to="/Prouducts"> <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <FaBoxOpen />
                    Proudcts
                  </li></Link>
                  <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <FaUserCircle />
                    My Account
                  </li>
                  <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <FaClockRotateLeft />
                    My Orders
                  </li>
                  <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <FaRegHeart />
                    Favorite
                  </li>
                  <Link to="/Login">  <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <BiLogIn />
                    Login
                  </li></Link>
                  <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <FaUserCheck />
                    Register
                  </li>
                  <Link to="/About_Us"> <li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <FaInfo />
                    About Us
                  </li></Link>
                  <Link to="/ContactUs"><li className="flex gap-3 items-center cursor-pointer" onClick={() => setSideBar(false)}>
                    <MdEmail />
                    Contact Us
                  </li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* for closing the modal */}
      {loginModal && <LogModal closeModal={closeModal} />}
    </>
  );
};

export default Header;

{
  /* */
}
