import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayOut = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header className="h-18 fixed w-full z-10" />
           <main className="flex-grow ">
                <Outlet />
           </main>
            <Footer />
        </div>
    );
};

export default MainLayOut;