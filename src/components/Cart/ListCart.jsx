import React, { useState } from "react";

const initialCart = [
  { id: 1, name: "BUFFALO", price: 100000, quantity: 1 },
  { id: 2, name: "BACKPACK", price: 120000, quantity: 2 },
  { id: 3, name: "TRADITIONAL ICED COFFEE", price: 80000, quantity: 1 },
];

export const ListCart = () => {
  const [cart, setCart] = useState(initialCart);
  const [note, setNote] = useState("");

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

//   const removeItem = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 lg:text-xl text-[#0a7485]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th></th>
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b text-sm">
                  <td className="">
                    {/* <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 px-2"
                    >
                      ❌
                    </button> */}
                    <button className="text-red-500 px-2">❌</button>
                  </td>
                  <td className="py-2 lg:text-xl  text-[10px]">
                    {item.name}
                  </td>
                  <td className="py-2 text-[10px] lg:text-xl ">
                    {item.price.toLocaleString()}
                  </td>
                  <td className="py-2 text-xl text-[10px] ">
                    <div className="flex items-center border rounded w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 lg:text-xl text-[10px]"
                      >
                        -
                      </button>
                      <span className="px-2 lg:text-xl text-[10px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 lg:text-xl text-[10px]"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-2 lg:text-xl ">
                    {(item.price * item.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {cart.length > 0 ? (
            <div className="flex justify-between mt-4 text-green-600">
              <button onClick={() => alert("Tiếp tục đặt món")}>next to</button>
              <button onClick={clearCart}>Xoá sạch</button>
            </div>
          ) : (
            <p className=" text-gray-500 mt-4"> No item</p>
          )}
        </div>

        <div className="bg-white shadow p-4 rounded">
          <h2 className="font-semibold mb-2">Ghi chú</h2>
          <textarea
            rows="4"
            className="w-full border p-2 rounded mb-4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>

          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>{total.toLocaleString()} đ</span>
          </div>

          <div className="mt-4 flex justify-between gap-2">
            <button className="bg-[#0a7485] text-white px-4 py-2 rounded-full w-1/2 hover:bg-green-600 cursor-pointer">
              update Cart
            </button>
            <button className="bg-[#0a7485] text-white px-4 py-2 rounded-full w-1/2 hover:bg-green-600 cursor-pointer">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

