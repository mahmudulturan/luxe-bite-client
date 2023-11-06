import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const MainLayout = () => {
    const location = useLocation();
    const [title, setTitle] = useState()
    const pathname = location.pathname;
    const state = location.state;

    useEffect(()=> {
        if(pathname == '/'){
            setTitle("Luxe Bite | Home")
        }
        else if(pathname == '/login'){
            setTitle("Luxe Bite | Login")
        }
        else if(pathname == '/register'){
            setTitle("Luxe Bite | Register")
        }
        else if(pathname == '/all-items'){
            setTitle("Luxe Bite | All Foods")
        }
        else if(pathname == '/blogs'){
            setTitle("Luxe Bite | Blogs")
        }
        else if(pathname == '/about'){
            setTitle("Luxe Bite | About")
        }
        else if(pathname == '/contact'){
            setTitle("Luxe Bite | Contact")
        }

        if (state) {
            setTitle(`Luxe Bite | ${state}`)
        }
    },[pathname, state])



    return (
        <div className="bg-backgroundCol font-montserrat">
            <Helmet>
                <title>{title}</title>
            </Helmet>
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