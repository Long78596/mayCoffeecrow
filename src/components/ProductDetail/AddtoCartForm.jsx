import React, { useState } from "react";
import {QuantityInput} from "./QuantityInput";

export const AddToCartForm = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Add to cart:", { quantity, productId: "41740660473995" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <QuantityInput quantity={quantity} setQuantity={setQuantity} />

      <div className="flex-1">
        <button
          type="submit"
          className="rounded-full w-full px-4 lg:px-12 py-2 font-medium uppercase text-sm whitespace-nowrap bg-[#0a7485] text-white hover:brightness-125"
        >
          <div className="flex space-x-4 items-center justify-center">
            <p className="text-xs ">Add to cart</p>
            <div className="price-per-item">
              <span className="text-white/40 line-through"></span>
              <span className="price-per-item--current">$14.00</span>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

