import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from "../../Store/Slices/cart_slice";

function CartTile({ cartItem }) {

  const dispatch=useDispatch();
  
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }
  return (
    <div>
      <div className="group flex flex-col items-center shadow-2xl  hover:shadow-red-300 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {cartItem?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              handleRemoveFromCart
                }
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTile
