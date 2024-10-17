// import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeCart, decreaseCart, clearCart, addCartData } from "../Redux/cardSlice";


const Add_To_Card = () => {
  const data = useSelector((state) => state.cart);
  console.log(data);
  const dispatch = useDispatch();

  // clear cart button
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // remove single product
     const handleRemoveCart = (cartdata) => {
         dispatch(removeCart(cartdata))
     }

     //decrease quantity
     const handleDecreaseCart = (cartdata) => {
        dispatch(decreaseCart(cartdata))
     }
     //Increase quantity
     const handleIncreaseCart = (cartdata) => {
        dispatch(addCartData(cartdata))
     }

  return (
    <>
      <div className="heading  ">
        <div className="content flex justify-between items-center bg-[#addadd] border-1 border-white h-20 p-10">
          <h1 className="text-xl font-semibold">CART</h1>
          <div className="flex ">
            <p>Home /</p>
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div className="main-container flex justify-around m-16">
        <div className="sub-main-container ">
          <div className="clear-btn  flex justify-end">
            <button
              className="clear-cart border-2 bg-red-500 text-white p-2 rounded-md"
              onClick={handleClearCart}
            >
              clear cart
            </button>
          </div>
          <div className="item-list flex flex-col gap-3 m-5">
            <div className="table ">
              <table>
                <thead className="border-b-2">
                  <tr className=" w-auto">
                    <th className="w-28">Image</th>
                    <th className="w-28">Proudct</th>
                    <th className="w-24">Price</th>
                    <th className="w-24">Tax %</th>
                    <th className="w-24">Quantity</th>
                    <th className="w-24">Sub-total</th>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((cartdata) => (
                    <tr className="border-b-2 text-center" key={cartdata.id}>
                      <td className="w-28">
                        <img
                          src={cartdata.image}
                          alt=""
                          className="h-24 w-24 m-3"
                        />
                      </td>
                      <td className="w-28 font-semibold">{cartdata.name}</td>
                      <td className="w-24">
                        {cartdata.min_max_price.max_special_price.toFixed(2)}
                      </td>
                      <td className="w-24">{cartdata.tax_percentage}</td>
                      <td className="w-24 ">
                        <div className="border-2 flex items-center justify-evenly">
                          <button onClick={() => handleDecreaseCart(cartdata)}>-</button>
                           <div className="count">{cartdata.cartQuantity}</div>
                           <button onClick={() => handleIncreaseCart(cartdata)}>+</button>
                        </div>
                      </td>
                      <td className=" total-price w-24 ">${cartdata.min_max_price.max_special_price * cartdata.cartQuantity}</td>
                      <td
                        className="w-24"
                        onClick={() => handleRemoveCart(cartdata)}
                      >
                        <MdDelete className="text-xl text-red-600 cursor-pointer" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="cart-total flex flex-col justify-around border-2 p-4 w-96">
          <h1 className="border-b-2 text-lg">Cart Total</h1>
          <div className="p-3">
            <div className="flex justify-between p-4">
              <p className="text-red-600">Total</p>
              <p className="text-red-600">${data.cartTotalAmount}</p>
            </div>

            <button className="bg-[#49A6A2] w-full p-4 text-white">
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_To_Card;
