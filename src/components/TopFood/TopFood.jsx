import useAxios from "../../hooks/useAxios";
import Title from "../Shared/Title";
import { useQuery } from '@tanstack/react-query'
import FoodCard from "./FoodCard";
import { Link } from "react-router-dom";

const TopFood = () => {
    const axios = useAxios()
    const { data, isLoading } = useQuery({
        queryKey: ["topFoods"], queryFn: async () => {
            const res = await axios.get('/top-food')
            return res;
        }
    })
    if (isLoading) {
        console.log(true);
    }
    console.log(data?.data);
    return (
        <div className="max-w-7xl my-10 mx-auto p-1 md:p-0">
            <Title title="Popular Picks">Tempting Tastes</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
                {/* cards will contain here */}

                {
                    data?.data.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
            <div className="text-center">
                <Link to="/all-items">
                <button className="my-6 py-2 px-3 bg-primaryCol text-white font-semibold hover:bg-darkSecondary transition-colors ease-in-out duration-500">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFood;