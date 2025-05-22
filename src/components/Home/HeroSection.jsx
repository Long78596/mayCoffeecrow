

export const HeroSection=()=>{
     return (
       <div className="container mx-auto">
         <div className="bg-[#fee7d8] rounded-lg flex flex-col-reverse lg:flex-row gap-4 lg:gap-10 ">
           <div className="flex flex-col lg:w-[495px] justify-center gap-4 m-10">
             <p class=" font-bold pb-2 text-3xl text-[#0a7485]">
               🔥 STRONG. BOLD. SMOOTH. 🔥
             </p>
             <p className=" text-7xl lg:text-7xl font-bold pb-4 text-[#0a7485]">
               <strong>Supercharged with Natural Caffeine Iced Coffee</strong>
             </p>
             <p class=" pb-4 text-2xl text-[#0a7485]">
               Powered by premium Vietnamese Robusta beans,
               <span>
                 <strong>
                   ach can delivers the kick of three energy drinks
                 </strong>
               </span>
               . Smooth, rich, and crafted to fuel your hustle, this is no
               ordinary pick-me-up.
             </p>
             <p class="text-2xl pb-4 text-[#0a7485]">
               Why settle for three when one does it all? Save money, boost your
               energy, and crush your day.
             </p>
             <div className="pb-4">
               <a>
                 <button className="rounded-full text-white bg-[#0a7485] px-4 lg:px-12 py-2 font-medium uppercase hover:brightness-125 cursor-pointer">
                   Shop Now
                 </button>
               </a>
             </div>
           </div>
           <div className="flex-1 w-full flex justify-center items-center p-10">
             <img
               loading="eager"
               class="w-full h-auto"
               src="//maycoffeecrew.co.nz/cdn/shop/files/Iced_Coffee_theme.png?v=1746788103"
               alt=""
             />
           </div>
         </div>
       </div>
     );
}