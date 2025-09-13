import { Outlet } from "react-router";
import App from "../App";
import Navbar from "../Component/Navbar.jsx/Navbar";
import Footer from "../Component/Footer/Footer";


const Layout = () => {
    return (
        <div className="sm:max-w-11/12 mx-6 lg:max-w-10/12 md:mx-auto">
            <Navbar></Navbar>
            <div className="min-h-screen my-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;