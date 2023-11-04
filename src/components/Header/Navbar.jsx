import logo from '../../assets/logo_light.png'
import { NavLink } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";


const Navbar = () => {
    const user = false;

    const routes = [
        { title: 'Home', path: '/' },
        { title: 'All Food Items', path: '/all-items' },
        { title: 'Blogs', path: '/blogs' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ]

    const navLinks = <div className='flex flex-col md:flex-row gap-6 font-montserrat font-semibold uppercase'>
        {
            routes.map((route, indx) => <NavLink key={indx} to={route.path} className={({ isActive }) => isActive ? "text-primaryCol transition-all duration-200" : "hover:text-primaryCol transition-all duration-200"
            }>{route.title}</NavLink>)
        }
    </div>
    return (
        <div>
            <div className="navbar bg-transparent max-w-7xl mx-auto my-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[9] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-1/6 object-cover' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    user?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <BiSolidUserCircle className='w-full h-full'></BiSolidUserCircle>
                            </div>
                        </label>
                        <div tabIndex={0} className="menu flex items-start gap-2 menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            <button className='bg-accentCol py-1 px-1 rounded-md text-white font-medium w-full'>My Added Food Items</button>
                            <button className='bg-accentCol py-1 px-1 rounded-md text-white font-medium w-full'>Add A Food Items</button>
                            <button className='bg-accentCol py-1 px-1 rounded-md text-white font-medium w-full'>My ordered food items</button>
                            <button className='bg-accentCol py-2 px-1 rounded-md text-white font-medium w-full'>LogOut</button>
                        </div>
                    </div>
                    :
                    <btn className="bg-accentCol text-white font-medium px-4 py-2 rounded-md cursor-pointer">Login</btn>
                }

                </div>
            </div>
        </div>
    );
};

export default Navbar;