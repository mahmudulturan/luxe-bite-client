import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Title from "../components/Shared/Title";
import useAxios from "../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading/Loading";
import toast from "react-hot-toast";

const MyOrderedItems = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    const axios = useAxios();
    const queryClient = useQueryClient()

    const { data, isLoading } = useQuery({
        queryKey: ["my-ordered-items", email], queryFn: async () => {
            const res = await axios.get(`/my-ordered-items?email=${email}`);
            return res;
        }
    })

    const {mutate} = useMutation({mutationKey:["my-ordered-items"], mutationFn:(deletedid)=> {
       return axios.delete(`/delete-order/${deletedid}`)
    }, onSuccess: ()=> {
        toast.success('Successfully Deleted!')
        queryClient.invalidateQueries({queryKey: ["my-ordered-items"]})
    }, onError: ()=>{
     toast.error("Delete Unsuccessfull")

    }})


    return (
        <div className="max-w-7xl mx-auto pb-10">
            <Title title="My Ordered Food Items">Food Order Log</Title>
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
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Purchase Time</th>
                                        <th>Owner</th>
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
                                                </div>
                                            </div>
                                        </td>
                                        <td>${item.price}</td>
                                        <td>{item.purchase_quantity}</td>
                                        <td>{item.dateAndTime}</td>
                                        <td>{item.buyerData.buyerName}</td>
                                        <th>
                                            <button onClick={()=> mutate(item._id)} className="btn btn-ghost btn-xs">Delete</button>
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

export default MyOrderedItems;