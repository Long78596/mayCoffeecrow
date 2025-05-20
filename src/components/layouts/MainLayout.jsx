import { Outlet } from "react-router-dom"
import { Header } from "./Header";
import { Footer } from "./Footer";

export  const MainLayout=()=>{

    return(
        <>
        <div className="flex">
            <Header />
            <main class="flex-1">
              <Outlet />
            </main>
            <Footer/>
        </div>
        </>
    )

}