import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from "react-router-dom";




const Social = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();



    const handleLogin = () => {
        googleLogin()
        .then(()=> {
            toast.success('Successfully Login!')
            if (location.state) {
                navigate(location.state)
            }
            else {
                navigate('/')
            }
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

    return (
        <div className="text-center my-3">
            <p className="text-base font-medium">Or</p>
            <p className="text-lg font-medium">Continue With</p>
            <button onClick={handleLogin} className="text-3xl flex gap-2 items-center justify-center py-2 px-3 my-1 bg-secondaryCol rounded-md max-w-xs mx-auto"><BsGoogle></BsGoogle><span className="text-lg font-semibold">Google</span></button>
        </div>
    );
};

export default Social;