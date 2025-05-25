export  const Detail =()=>{
   return (
     <section>
       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div>
             <div className="bg-white rounded shadow p-4">
               <img
                 src="https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=700"
                 alt="Buffalo Robusta"
                 className="w-full h-auto object-contain"
               />
             </div>

             <div className="flex gap-2 mt-4">
               {[1, 2, 3, 4, 5].map((item) => (
                 <div
                   key={item}
                   className=" rounded overflow-hidden w-50 h-50 flex-shrink-0"
                 >
                   <img
                     src="https://maycoffeecrew.co.nz/cdn/shop/files/BUFFALO_N_T.png?v=1706686569&width=100"
                     alt="Thumbnail"
                     className="w-full h-full object-cover"
                   />
                 </div>
               ))}
             </div>
           </div>

           <div>
             <h1 className="text-2xl font-bold text-[#0a7485] uppercase">
               BUFFALO (ROBUSTA)
             </h1>
             <span className="inline-block bg-yellow-200 text-xs font-medium px-2 py-1 rounded mt-2 mb-4 text-[#0a7485]">
               Traditional Vietnamese Coffee MUST TRY
             </span>

             <p className="text-sm  mb-4 text-[#0a7485]">
               100% pure robusta, Buffalo is a bold, powerful yet smooth, clean
               coffee that effortlessly complements milk. Giving you that double
               shot of caffeine without breaking the bank.
             </p>

             <div className="grid grid-cols-2 text-sm gap-2 mb-4 text-[#0a7485]">
               <p>
                 <strong>Variety:</strong> Robusta
               </p>
               <p>
                 <strong>Region:</strong> Gia Lai
               </p>
               <p>
                 <strong>Taste:</strong> Strong & Bold
               </p>
               <p>
                 <strong>Flavour Note:</strong> Dark chocolate, Nutty
               </p>
               <p>
                 <strong>Strength:</strong> ⬤⬤⬤⬤⬤
               </p>
               <p>
                 <strong>Roast:</strong> ⬤⬤⬤⬤⭐
               </p>
             </div>

             <div className="mb-4 text-[#0a7485]">
               <label className="font-semibold text-sm block mb-1">Size</label>
               <select className="border-[#0a7485] rounded px-3 py-2 w-full">
                 <option>250G</option>
                 <option>500G</option>
                 <option>1KG</option>
               </select>
             </div>

             <div className="mb-4">
               <label className="font-semibold text-sm block mb-1">Grind</label>
               <select className="border rounded px-3 py-2 w-full">
                 <option>Whole Bean</option>
                 <option>Ground</option>
                 <option>Espresso</option>
               </select>
             </div>

             <div className="flex items-center gap-4 mb-4">
               <div className="flex items-center border rounded px-2 py-1">
                 <button className="text-xl px-2">-</button>
                 <input
                   type="text"
                   value="1"
                   readOnly
                   className="w-10 text-center border-0 focus:ring-0"
                 />
                 <button className="text-xl px-2">+</button>
               </div>
               <button className="bg-[#0a7485] text-white px-6 py-2 rounded-full text-sm font-medium hover:brightness-110">
                 ADD TO CART $14.00
               </button>
             </div>

             <div className="border-#0a7485  text-[#0a7485] rounded p-4 text-sm">
               <label className="block mb-2 font-semibold">
                 PURCHASE OPTION:
               </label>
               <div className="mb-2">
                 <input
                   type="radio"
                   name="purchase"
                   id="one-time"
                   defaultChecked
                 />
                 <label htmlFor="one-time" className="ml-2">
                   One-time purchase -{" "}
                   <span className="font-medium">$14.00</span>
                 </label>
               </div>
               <div>
                 <input type="radio" name="purchase" id="subscription" />
                 <label htmlFor="subscription" className="ml-2">
                   Subscription (10% OFF) -{" "}
                   <span className="line-through">$14.00</span>{" "}
                   <span className="text-green-600 font-medium">$12.60</span>
                 </label>
                 <ul className="list-disc ml-6 mt-2 text-xs text-gray-600">
                   <li>Save Money</li>
                   <li>Modify and Skip Anytime</li>
                   <li>Cancel Anytime</li>
                 </ul>
                 <select className="mt-2 border rounded px-2 py-1 w-full">
                   <option>Select Frequency</option>
                   <option>Every week</option>
                   <option>Every 2 weeks</option>
                   <option>Every month</option>
                 </select>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
}