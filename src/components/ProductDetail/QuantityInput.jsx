import React from "react";

export const QuantityInput = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) setQuantity(value);
  };

  return (
    <div className="w-full max-w-[180px] quantity flex items-center space-x-1 rounded-full border border-primary px-4 py-1">
      <button
        type="button"
        className="h-3 w-3 quantity__button"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 2">
          <path
            fill="currentColor"
            d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
          />
        </svg>
      </button>
      <input
        type="number"
        className="w-full outline-none text-center appearance-none quantity__input text-sm"
        min="1"
        step="1"
        value={quantity}
        onChange={handleChange}
      />
      <button
        type="button"
        className="h-3 w-3 quantity__button"
        onClick={handleIncrease}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
          <path
            fill="currentColor"
            d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
          />
        </svg>
      </button>
    </div>
  );
};

