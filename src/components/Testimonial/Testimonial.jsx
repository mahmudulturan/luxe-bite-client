import useAxios from "../../hooks/useAxios";
import { useQuery } from '@tanstack/react-query'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Loading from "../Loading/Loading";


const Testimonial = () => {
    const axios = useAxios();

    const { data, isLoading } = useQuery({
        queryKey: ["testimonials"], queryFn: async () => {
            const res = await axios.get('/testimonials')
            return res;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="min-h-[60vh] my-10" style={{ backgroundImage: "url(https://i.ibb.co/njv1hPd/happy-waiter-serving-food-group-cheerful-friends-pub-1.jpg)" }}>
                <div className="min-h-[60vh] w-full bg-primaryCol/80">
                    <div className="max-w-3xl mx-auto">
                        <Swiper
                            loop={true}
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {
                                data?.data.map(item => <SwiperSlide key={item._id}> 
                                <div className="min-h-[60vh] flex items-center justify-center flex-col text-center">
                                <h1 className="text-white font-normal max-w-xl text-2xl md:text-3xl py-3">
                                    "{item.testimonial}"</h1>
                                <img className="w-20 h-20 object-cover rounded-full" src={item.image} alt="" />
                                <h1 className="text-white font-normal text-base md:text-lg py-5">--{item.name}</h1>
                                </div>
                                 </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;