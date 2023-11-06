import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="bg-backgroundCol font-montserrat">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Header></Header>
            <div className="min-h-[66vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;