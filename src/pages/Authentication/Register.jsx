import Lottie from "lottie-react";
import loginAnimation from "../../assets/animations/loginAnimation.json"
import { Link } from "react-router-dom";
import Title from "../../components/Shared/Title";
import Social from "./Social";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
import useAxios from "../../hooks/useAxios";


const Register = () => {
    const {singUp, logOut} = useContext(AuthContext)
    const axios = useAxios();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length<6){
            return toast.error("Password should have minimum 6 characters");
          }
          else if(!/[A-Z]/.test(password)){
            return toast.error("Password should have atleats one capital letter");
          }
          else if(!/[!@#$%^&*]/.test(password)){
            return toast.error("Password should have atleats one special character");
          }

        singUp(email,password)
        .then((res)=> {
            const user = res.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
            .then(() => {
                const userData = {name, email, photo}
                axios.post('/users', userData)
                .then(() => {
                    toast.success('Successfully Registered!')
                })
                .catch(error => {
                    logOut()
                    toast.error(error.message)
                })
            })
        })
    }
    return (
        <div className="max-w-7xl min-h-[92vh] mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1">
                <form onSubmit={handleRegister}>
                    <Title>Register Here</Title>
                    <div className="space-y-4">
                    <div className="">
                    <label htmlFor="name" className="block font-medium text-black text-xl my-1">Your Name</label>
                    <input className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" 
                    placeholder="Type Your Name"
                    type="text" name="name" id="name" />
                    </div>
                    <div className="">
                    <label htmlFor="photo" className="block font-medium text-black text-xl my-1">Your Photo URL</label>
                    <input className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" 
                    placeholder="Input Your Photo Url"
                    type="text" name="photo" id="photo" />
                    </div>
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
                        <button type="submit" className="text-white font-semibold w-full py-4 px-4 bg-primaryCol my-6">Register</button>
                    </div>
                    </div>
                </form>
                <p>Already have an account? <Link className="text-primaryCol underline" to='/login'>Login Here</Link></p>
                <Social></Social>
            </div>
            <div className="flex-1">
             <Lottie animationData={loginAnimation} />

            </div>
        </div>
    );
};

export default Register;