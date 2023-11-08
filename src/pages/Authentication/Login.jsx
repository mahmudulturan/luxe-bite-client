import Lottie from "lottie-react";
import loginAnimation from "../../assets/animations/loginAnimation.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Title from "../../components/Shared/Title";
import Social from "./Social";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';



const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(() => {
                toast.success('Successfully Login!')
                if (location.state) {
                    navigate(location.state)
                }
                else {
                    navigate('/')
                }

            })
            .catch(error => {
                toast.error(error.message)

            })
    }
    return (
        <div className="max-w-7xl min-h-[92vh] mx-auto flex flex-col md:flex-row justify-between items-center py-5">
            <div className="flex-1">
                <form onSubmit={handleLogin}>
                    <Title>Login Here</Title>
                    <div className="space-y-4">
                        <div className="">
                            <label htmlFor="email" className="block font-medium text-black text-xl my-1">Your Email</label>
                            <input className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full"
                                placeholder="Type Your Email"
                                type="email" name="email" id="email" />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block font-medium text-black text-xl my-1">Your Password</label>
                            <input className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full"
                                placeholder="Type Your Password"
                                type="password" name="password" id="password" />
                        </div>
                        <div>
                            <button type="submit" className="text-white font-semibold w-full py-4 px-4 bg-primaryCol my-6">Login</button>
                        </div>
                    </div>
                </form>
                <p>Don't have any account? <Link state={location.state} className="text-primaryCol underline" to='/register'>Register Here</Link></p>
                <Social></Social>
            </div>
            <div className="flex-1">
                <Lottie animationData={loginAnimation} />
            </div>
        </div>
    );
};

export default Login;