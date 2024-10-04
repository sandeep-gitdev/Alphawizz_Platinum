import { CiStar } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ReactImageMagnify from "react-image-magnify";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ShoppingCart = () => {
  const Location = useLocation();
  const ProductData = Location.state;
  console.log(ProductData);

  const [num, setNum] = useState(0);

  function inc(n) {
    setNum(num + n);
  }

  function dec(n) {
    setNum(num - n);
  }

  return (
    <>
      <div className="heading  ">
        <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
          <h1 className="text-xl">{ProductData.name}</h1>
          <div className="flex ">
            <p>Home /</p>
            <p>Category /</p>
            <p>Products </p>
          </div>
        </div>
      </div>

      <section>
        <div className="maincontainer grid grid-cols-2  mx-52 my-10">
          {
            //       ProductData.map((element,id) => {

            <>
              <div className="  flex justify-between items-center">
                <div className=" text-3xl ml-">
                  <IoIosArrowBack />
                </div>
                <div
                  className="imgContent flex justify-center items-center w-[80%] h-[50%]"
                  key={ProductData.id}
                >
                  <div className="p-12">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Product Image", // Use a meaningful alt text
                          isFluidWidth: true, // Set to false to control the size
                          src: ProductData.image,
                          width: 200, // Small image width
                          height: 300, // Small image height
                        },
                        largeImage: {
                          src: ProductData.image,
                          width: 1200, // Large image width (zoomed)
                          height: 1800, // Adjust large image height based on aspect ratio
                        },
                        enlargedImageContainerDimensions: {
                          width: "100%", // Adjust this based on how large you want the zoomed image to appear
                          height: "100%",
                        },
                        enlargedImageContainerStyle: {
                          left: "100%", // Positioning the zoom container on the left
                          top: "0", // Adjust if necessary
                          // Ensures it appears above other elements
                        },
                      }}
                    />

                    {/* <img src={ProductData.image} id={ProductData.id} alt="" /> */}
                  </div>
                </div>
                <div className=" text-3xl">
                  <IoIosArrowForward />
                </div>
              </div>
              <div className="contInfo  p-8 flex flex-col gap-3">
                <div className="">
                  <h2 className="font-semibold text-lg mb-3">
                    {ProductData.category}
                  </h2>
                  <p className="">{ProductData.name}</p>
                </div>
                <hr />
                <div className="flex  text-xl ">
                  <span>
                    <CiStar className="hover:bg-yellow-500" />
                  </span>
                  <span>
                    <CiStar className="hover:bg-yellow-500" />
                  </span>
                  <span>
                    <CiStar className="hover:bg-yellow-500" />
                  </span>
                  <span>
                    <CiStar className="hover:bg-yellow-500" />
                  </span>
                  <span>
                    <CiStar className="hover:bg-yellow-500" />
                  </span>
                </div>
                <p className="mt-2">{ProductData.rating.rate} Rating</p>
                <div className="price ">
                  <h2>
                    ₹{ProductData.min_max_price.max_special_price.toFixed(2)}
                  </h2>
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="border-2 mr-4 p-2 w-48"
                  />
                  <button className="border-2 p-2 rounded-md border-[#49A6A2] text-[#49A6A2]">
                    Check Availablitiy
                  </button>
                </div>
                <div className=" border-2 w-28 flex justify-around mt-5 p-2">
                  <button onClick={() => dec(1)}>-</button> <span>{num}</span>{" "}
                  <button onClick={() => inc(1)}>+</button>
                </div>
                <div className="">
                  <button className="mr-3 border-2 border-[#49A6A2] rounded-md p-3 text-[#49A6A2]">
                    Add to cart
                  </button>
                  <button className="mr-3 border-2 border-red-700 rounded-md p-3 text-red-700">
                    Add to Favorite
                  </button>
                </div>
                <p>
                  Seller{" "}
                  <span className="text-sky-700">
                    {ProductData.seller_name}
                  </span>
                </p>
              </div>
            </>

            //       })
          }
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
