import logo1 from '../../assets/logo_dark.png'

const Footer = () => {
    return (
        <div className='bg-darkBackground text-white px-1 md:px-0'>
            <footer className='flex flex-col md:flex-row max-w-7xl mx-auto py-6 gap-4'>
                <div className='flex-1'>
                    <img className='md:w-5/12 object-cover mb-3' src={logo1} alt="logo fo luxe bite" />
                    <hr />
                    <h3 className='font-medium text-white text-xl my-2'>Subscribe for Delicious Updates</h3>
                    <div className="join my-3 max-w-xs">
                        <input className="join-item rounded-none bg-transparent border-white border-b outline-none md:px-2 focus:bg-white transition-all duration-200" placeholder="Email" />
                        <button className="btn join-item rounded-none bg-primaryCol text-white border-none">Subscribe</button>
                    </div>
                </div>
                <div className='flex-1 '>
                    <h3 className='font-medium text-2xl mb-3'>Quick Links</h3>
                    <div className='flex gap-4 my-3 h-full'>
                        <div className='flex flex-col items-start space-y-4'>
                            <button className='hover:text-primaryCol transition-all duration-200'>All Food Items</button>
                            <button className='hover:text-primaryCol transition-all duration-200'>Blogs</button>
                            <button className='hover:text-primaryCol transition-all duration-200'>About</button>
                        </div>
                        <div className='flex flex-col items-start space-y-4'>
                            <button className='hover:text-primaryCol transition-all duration-200'>Contacts</button>
                            <button className='hover:text-primaryCol transition-all duration-200'>Privacy Policy</button>
                            <button className='hover:text-primaryCol transition-all duration-200'>Terms And Conditions</button>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h3 className='font-medium text-2xl mb-3'>Opening Hours</h3>
                    <div className='space-y-1'>
                        <h4 className='border-b'>Monday to Tuesday: 11:00 AM - 9:00 PM</h4>
                        <h4 className='border-b'>Wednesday: Closed</h4>
                        <h4 className='border-b'>Thursday to Friday: 11:00 AM - 10:00 PM</h4>
                        <h4 className='border-b'>Saturday: 10:00 AM - 10:00 PM</h4>
                        <h4 className=''>Sunday: 10:00 AM - 8:00 PM</h4>
                    </div>
                </div>
            </footer>
            <hr className='max-w-7xl mx-auto my-2' />
            <h5 className='text-center text-sm py-3'>Copyright © 2020 Luxe Bite – Indulge in Elegance.
            </h5>
        </div>
    );
};

export default Footer;