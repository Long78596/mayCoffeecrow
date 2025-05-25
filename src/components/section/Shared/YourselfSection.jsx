export  const YourselfSection =()=>{
     return (
       <section className=" mt-3 lg:mt-4 container mx-auto">
         <div className="flex  flex-col lg:flex-row items-center justify-center text-center gap-10 lg:px-14">
           <img
             className="w-24 lg:w-34 lg:h-54"
             src="https://cdn.shopify.com/s/files/1/0611/1956/1867/files/mascot2.svg?v=1699109038"
             loading="eager"
             alt=""
           />
           <p className="text-title md:text-submenu  px-4 lg:px-8 font-bold text-center  text-[#0a7485] uppercase">
             YOU&apos;LL FIND YOURSELF ENERGISED AFTER ONE SIP
           </p>
         </div>
         <div className="flex overflow-x-auto gap-4 mt-4 lg:mt-10">
           {["yourself1", "yourself2", "yourself3", "yourself4"].map(
             (img, index) => (
               <div
                 key={index}
                 className="rounded-xl border border-[#0a7485] overflow-hidden min-w-[235px]"
               >
                 <img
                   loading="eager"
                   src={`//maycoffeecrew.co.nz/cdn/shop/files/${img}.webp?v=1699109206&width=500`}
                   alt=""
                 />
               </div>
             )
           )}
         </div>
         <div className="lg:hidden mt-4 flex  justify-center items-center">
           <div className="rotate-180 px-2 text-[#0a7485]">
             <i className="fa-solid fa-arrow-right"></i>
           </div>
           <div className="flex space-x-1">
             <div className="h-2 w-2 border-[#0a7485] border rounded-full  bg-[#0a7485]"></div>
             <div className="h-2 w-2 border-[#0a7485] border rounded-full"></div>
             <div className="h-2 w-2 border-[#0a7485] border rounded-full"></div>
             <div className="h-2 w-2 border-[#0a7485] border rounded-full"></div>
           </div>
           <div className="rotate-360 px-2 text-[#0a7485]">
             <i className="fa-solid fa-arrow-right"></i>
           </div>
         </div>
       </section>
     );


}