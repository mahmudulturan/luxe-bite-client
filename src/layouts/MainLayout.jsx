import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
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
        else if(pathname == '/my-food-items'){
            setTitle("Luxe Bite | My Food Item")
        }
        else if(pathname == '/add-item'){
            setTitle("Luxe Bite | Add Item")
        }
        else if(pathname == '/update-item'){
            setTitle("Luxe Bite | Update Item")
        }
        else if(pathname == '/my-ordered-items'){
            setTitle("Luxe Bite | My Ordered Item")
        }
        else{
            setTitle(`Luxe Bite | ${pathname.replace("/", " ")}`)
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