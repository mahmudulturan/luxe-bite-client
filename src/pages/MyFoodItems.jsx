import { useQuery } from "@tanstack/react-query";
import Title from "../components/Shared/Title";
import useAxios from "../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";

const MyFoodItems = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const axios = useAxios();

    const { data, isLoading } = useQuery({
        queryKey: ["my-added-items", email], queryFn: async () => {
            const res = await axios.get(`/my-added-items?email=${email}`);
            return res;
        }
    })

    return (
        <div data-aos="zoom-in" className="max-w-7xl mx-auto pb-10">
            <Title title="My Added Food Items">Signature Dishes</Title>
            {
                isLoading?
                    <Loading></Loading>
                    :
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Food Origin</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Sold</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.data?.map(item => <tr key={item._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-20 h-20">
                                                        <img src={item.food_img} alt={`image of ${item.food_img}`} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.food_name}</div>
                                                    <div className="text-sm opacity-50">{item.food_category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.food_origin}
                                        </td>
                                        <td>${item.price}</td>
                                        <td>{item.stock_quantity}</td>
                                        <td>{item.sold}</td>
                                        <th>
                                            <Link to={`/update-item/${item._id}`}>
                                            <button className="btn btn-ghost btn-xs">Update</button>
                                            </Link>
                                        </th>
                                    </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyFoodItems;