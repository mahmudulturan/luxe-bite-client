import Title from "../components/Shared/Title";
import useAxios from "../hooks/useAxios";
import { useQuery } from '@tanstack/react-query';
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoTwitter, BiLogoLinkedinSquare } from "react-icons/bi";


const About = () => {
    const axios = useAxios()
    const { data } = useQuery({
        queryKey: ["chef"], queryFn: async () => {
            const res = await axios.get('/chef')
            return res;
        }
    })
    return (
        <div>
            <div className="mb-10 max-w-7xl mx-auto p-1 md:p-0">
                <Title title="Our Story">The Luxe Bite Experience</Title>
                <div>
                    <span className="border-b-2 border-primaryCol text-xl font-semibold">Meet the Master Chef</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {
                            data?.data.map(item => <div key={item._id} className="flex flex-col items-center justify-stretch my-3 group">
                                <div className='h-80 w-60 relative overflow-hidden rounded-md'>
                                    <img className='h-80 w-60 object-cover group-hover:rotate-1 duration-200 transition-transform transform group-hover:scale-105' src={item.img} alt={`image of ${item.name}`} />
                                    <div className='text-2xl text-secondaryCol absolute hidden group-hover:bottom-0 group-hover:flex items-center justify-center w-full h-full bg-slate-600/40 transition-all duration-500'>
                                        <a href="www.facebook.com"><BiLogoFacebookCircle> </BiLogoFacebookCircle></a>
                                        <a href="www.instagram.com"><BiLogoInstagramAlt></BiLogoInstagramAlt></a>
                                        <a href="www.twitter.com"><BiLogoTwitter></BiLogoTwitter></a>
                                        <a href="www.linkedin.com"><BiLogoLinkedinSquare></BiLogoLinkedinSquare></a>
                                    </div>
                                </div>
                                <h1 className="text-xl font-medium">{item.name}</h1>
                                <h1 className="text-textCol/90 text-sm">{item.role}</h1>
                                <h1 className="text-center">{item.short_desc}</h1>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <div className="text-right">
                    <span className="border-b-2 border-primaryCol text-xl font-semibold">Our Culinary Journey</span>
                    </div>
                    <p className="py-3 text-right">At Luxe Bite, our story is a tale of passion and culinary excellence. Founded by a group of food enthusiasts with a shared love for fine dining, our journey has been a relentless pursuit of perfection. We've traversed the globe, discovering the world's culinary treasures and traditions, which have shaped the essence of Luxe Bite. Our commitment to sourcing the finest ingredients and crafting dishes that evoke emotions has made us a culinary destination. With a dedicated team of chefs and staff, we invite you to join us on an extraordinary culinary journey, where your experiences merge with our story to create unforgettable moments.</p>
                </div>
            </div>
        </div>
    );
};

export default About;