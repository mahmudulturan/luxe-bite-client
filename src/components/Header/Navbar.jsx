import logo from '../../assets/logo_light.png'
import { Link, NavLink } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';



const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogout = ()=> {
        logOut()
        .then(()=> {
            toast.success('Successfully LogOut!')

        })
        .catch(error=>{
            toast.error(error.message)

        })
    }

    const routes = [
        { title: 'Home', path: '/' },
        { title: 'All Food Items', path: '/all-items' },
        { title: 'Blogs', path: '/blogs' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
    ]

    const navLinks = <div className='flex flex-col lg:flex-row gap-6 font-montserrat font-semibold uppercase'>
        {
            routes.map((route, indx) => <NavLink key={indx} to={route.path} className={({ isActive }) => isActive ? "text-primaryCol transition-all duration-200" : "hover:text-primaryCol transition-all duration-200"
            }>{route.title}</NavLink>)
        }
    </div>
    return (
        <div>
            <div className="navbar bg-transparent max-w-7xl mx-auto py-4 items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[9] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='md:w-5/12 object-cover' src={logo} alt="logo fo luxe bite" />
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
                                {
                                 user?.photoURL?
                                 <img src={user?.photoURL} alt={`image of ${user?.email}`} />
                                 :

                                 <BiSolidUserCircle className='w-full h-full'></BiSolidUserCircle>
                                }
                            </div>
                        </label>
                        <div tabIndex={0} className="menu flex items-start gap-2 menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            <h5 className='text-center font-medium'>{user?.displayName}</h5>
                            <Link to="/my-food-items" className='w-full'>
                            <button className='bg-accentCol py-1 px-1 rounded-md text-white font-medium w-full'>My Added Food Items</button>
                            </Link>
                            <Link className='w-full' to="/add-item">
                            <button className='bg-accentCol py-1 px-1 rounded-md text-white font-medium w-full'>Add A Food Items</button>
                            </Link>
                            <Link className='w-full' to="/my-ordered-items">
                            <button className='bg-accentCol py-1 px-1 rounded-md text-white font-medium w-full'>My ordered food items</button>
                            </Link>
                            <button onClick={handleLogout} className='bg-accentCol py-2 px-1 rounded-md text-white font-medium w-full'>LogOut</button>
                        </div>
                    </div>
                    :
                    <Link to="/login">
                    <button className="bg-accentCol text-white font-medium px-4 py-2 rounded-md cursor-pointer">Login</button>
                    </Link>
                }
                </div>
            </div>
        </div>
    );
};

export default Navbar;