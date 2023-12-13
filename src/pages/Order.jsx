import { useQuery } from "@tanstack/react-query";
import Title from "../components/Shared/Title";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react"
import toast from 'react-hot-toast';


const Order = () => {
    const axios = useAxios()
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["order-data", id], queryFn: async () => {
            const res = await axios.get(`/all-food-items/${id}`)
            return res;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const { food_name, food_img, price, stock_quantity, sold, made_by, _id } = data.data;

    const buyerName = user?.displayName;
    const buyerEmail = user?.email;
    const date = new Date()
    const dateAndTime = date.toLocaleString();

    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;
        const purchase_quantity = Number(form.purchase_quantity.value);
        if (made_by.email === buyerEmail) {
            return toast.error('You cant buy your own item!')
        }
        else if(stock_quantity < purchase_quantity) {
            return toast.error('Dont have enough quantity!')
        }
        const available_quantity = stock_quantity - purchase_quantity;
        const newSoldQuantity = sold + purchase_quantity;
        const updatedProductData = {available_quantity, newSoldQuantity}
        const purchaseData = { food_id: _id, food_name, food_img, price, purchase_quantity, buyerData: { buyerName, buyerEmail }, dateAndTime }
        axios.post('/new-orders', {purchaseData, updatedProductData})
        .then(res => {
            if(res.data.result.acknowledged){
                toast.success('Order Placed!')
            }
            if(res.data.updatedResult.modifiedCount>0){
                refetch({ queryKey: ["order-data", id] })
            }
        })
        .catch(error => {
            toast.error(error.message)
        })
    }


    return (
        <div data-aos="zoom-in" className="max-w-7xl mx-auto mb-10">
            <Title title={data.data.food_name}>Pick Your Flavors</Title>
            <div className="max-w-3xl mx-auto shadow-md shadow-secondaryCol px-4">
                <h4 className="font-semibold text-xl text-center my-2">Order Summery</h4>
                <form onSubmit={handlePurchase} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="text-lg font-medium">Name</label>
                        <input type="text" name="name" id="name" className="bg-transparent text-2xl outline-none border-b-2 border-primaryCol w-full" defaultValue={food_name} readOnly />
                    </div>
                    <div>
                        <label htmlFor="price" className="text-lg font-medium">Price</label>
                        <input type="text" name="price" id="price" className="bg-transparent text-2xl outline-none border-b-2 border-primaryCol w-full" defaultValue={price} readOnly />
                    </div>
                    {
                        stock_quantity>1 &&
                        <div>
                            <div>
                                <label htmlFor="stock_quantiy" className="text-lg font-medium">Available In Stock</label>
                                <input type="text" name="stock_quantiy" id="stock_quantiy" className="bg-transparent text-2xl outline-none border-b-2 border-primaryCol w-full" value={stock_quantity} readOnly />
                            </div>
                            <div>
                                <label htmlFor="purchase_quantity" className="text-lg font-medium">Purchase Quantity</label>
                                <input type="number" min={1} name="purchase_quantity" id="purchase_quantity" className="bg-transparent input-ghost text-2xl outline-none border-b-2 border-primaryCol w-full" defaultValue={1} />
                            </div>
                        </div>
                    }
                    <div className="bg-transparent text-xl outline-none border-b-2 border-primaryCol w-full">
                        <h4>Deliver to:</h4>
                        <p>{buyerName}</p>
                        <p>{buyerEmail}</p>
                    </div>
                    <div>
                        {
                            stock_quantity<1?
                            <div>
                            <button type="submit" className="text-white font-semibold w-full py-4 px-4 bg-primaryCol my-6">Out Of Stock</button>
                        </div>
                        :
                        <div>
                            <button type="submit" className="text-white font-semibold w-full py-4 px-4 bg-primaryCol my-6">Purchase</button>
                        </div>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Order;