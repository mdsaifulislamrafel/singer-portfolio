import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Home/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;