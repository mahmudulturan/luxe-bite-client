import Banner from "../components/Header/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import TopFood from "../components/TopFood/TopFood";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopFood></TopFood>
            <Testimonial></Testimonial>
            <About></About>
        </div>
    );
};

export default Home;