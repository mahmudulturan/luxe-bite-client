import './banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[93vh]" style={{ backgroundImage: 'url(https://i.ibb.co/nbjw6mc/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="max-w-7xl mx-auto text-left w-full h-full flex flex-col md:flex-row justify-between items-center p-1 md:p-0">
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-4xl md:text-6xl">Discover the Flavors of <br /> <span className="text-white text-5xl md:text-7xl drop-shadow-2xl shadow-white">Luxe Bite</span></h4>
                        <p className=" py-2 text-white/90">Your culinary adventure begins here at Luxe Bite. We're here to guide you through a world of exquisite flavors and unforgettable dining moments.</p>
                        <button className='py-3 px-4 bg-primaryCol font-medium text-white hover:bg-white hover:text-textCol transition-all duration-200'>Explore Our Full Menu</button>
                    </div>
                    <div className="flex-1">
                        <div className="rotate-image animate-spin animate-spin-slow  duration-200">
                            <img className="w-56 md:w-full md:h-full" src="https://i.ibb.co/YXyVTzD/tasty-food-assortment-flat-lay-1.png" alt="Wandering Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;