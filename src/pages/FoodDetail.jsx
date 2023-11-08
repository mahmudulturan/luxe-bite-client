import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import {useParams, Link} from 'react-router-dom'
import Title from "../components/Shared/Title";
import Loading from "../components/Loading/Loading";

const FoodDetail = () => {
    const axios = useAxios();
    const {id} = useParams();
    const {data, isLoading} = useQuery({queryKey: ["singleFoodItem"], queryFn: async()=> {
        const res = axios.get(`/all-food-items/${id}`)
        return res
    }})
    if(isLoading){
        return <Loading></Loading>
    }
    const {food_name, food_img, food_category, price, made_by, food_origin, short_description, _id} = data.data;
    return (
        <div className="max-w-7xl mx-auto mb-10 p-1 md:p-0"> 
            <div className="text-center">
                <Title>{food_name}</Title>
                <img src={food_img} className="md:w-1/2 h-96 object-cover rounded-md mx-auto" alt={`image of ${food_name}`} />
                <div className="text-xl space-y-1 my-2">
                <p>Category: <span className="font-medium">{food_category}</span></p>
                <p>Price: <span className="font-medium">{price}</span></p>
                <p>Made By: <span className="font-medium">{made_by?.name || made_by}</span> </p>
                <p>Food Origin: <span className="font-medium">{food_origin}</span></p>
                </div>
                <p className="max-w-3xl mx-auto my-2">{short_description}</p>
                <Link state={food_name} to={`/order/${_id}`}>
                <button className="py-2 px-4 bg-primaryCol text-white font-medium my-3">Order</button>
                </Link>
            </div>
            
        </div>
    );
};

export default FoodDetail;