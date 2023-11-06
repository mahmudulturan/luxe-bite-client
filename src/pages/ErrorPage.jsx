import Lottie from 'lottie-react';
import errorAnimation from '../assets/animations/errorAnimation.json'
import {useRouteError} from 'react-router-dom'
import { Link } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='max-w-7xl max-h-screen mx-auto flex flex-col items-center justify-center'>
            <div className='mx-auto relative'>
            <Lottie  className='max-w-3xl' animationData={errorAnimation}></Lottie> 
            <div className='absolute w-full flex items-center justify-center top-2 text-center md:top-12'>
            <h3 className='md:text-3xl font-semibold'>{error.data}</h3>
            </div>
            <div className='text-center'>
            <Link to="/">
            <button className='py-3 px-4 bg-primaryCol text-white font-semibold'>Go Home</button>
            </Link>          
            </div>
            </div>

        </div>
    );
};

export default ErrorPage;