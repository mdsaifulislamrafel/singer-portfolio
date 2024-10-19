import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-164px)] my-16'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;