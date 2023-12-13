import { useContext, useEffect, useState } from "react";
import Title from "../components/Shared/Title";
import { AuthContext } from "../providers/AuthProvider";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";


const UpdateItem = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [madeBy, setMadeBy] = useState("")
    const { user } = useContext(AuthContext)
    const {id} = useParams();
    const axios = useAxios();
    useEffect(()=> {
        setName(user?.displayName)
        setEmail(user?.email)
        setMadeBy(`Name: ${user?.displayName}. Email: ${user?.email}`)
    },[user])

    const {data, isLoading} = useQuery({queryKey:["update-product"], queryFn: async()=>{
        const res = axios.get(`/all-food-items/${id}`)
        return res  
    }})
    if(isLoading){
        return <Loading></Loading>
    }

    const {food_name, food_category, food_img, price, stock_quantity, food_origin, sold: prevSold, short_description} = data.data;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const food_img = form.food_img.value;
        const food_category = form.food_category.value;
        const price = parseFloat(form.price.value); 
        const made_by = {name, email};
        const stock_quantity = parseInt(form.stock_quantity.value);
        const sold = prevSold;
        const food_origin = form.food_origin.value;
        const short_description = form.short_description.value;
        const foodData = {food_name, food_category, food_img, price, stock_quantity, sold, made_by, food_origin, short_description}
        axios.put(`/update-item/${id}`,foodData)
        .then(res=> {
            if(res.data.modifiedCount>0){
                toast.success('Successfully Updated!')
            }
        })
        .catch(err=> {
            toast.error(err.message)
        })

    }
    return (
        <div data-aos="zoom-in" className="max-w-7xl mx-auto mb-10 p-1 md:p-0">
            <Title title="Update Existing Item">Diverse Menu</Title>
            <div>
                <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="food_name" className="block font-medium text-black text-xl my-1">Food Name</label>
                        <input type="text" defaultValue={food_name} name="food_name" placeholder="Type Your Food Name..." id="food_name" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div>
                        <label htmlFor="food_img" className="block font-medium text-black text-xl my-1">Food Image</label>
                        <input type="text" name="food_img" defaultValue={food_img} placeholder="Input Food Photo URL..." id="food_img" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div>
                        <label htmlFor="food_category" className="block font-medium text-black text-xl my-1">Food Category</label>
                        <input type="text" name="food_category" defaultValue={food_category} placeholder="Type Your Food Category..." id="food_category" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div>
                        <label htmlFor="stock_quantity" className="block font-medium text-black text-xl my-1">Food Quantity</label>
                        <input type="number" name="stock_quantity" defaultValue={stock_quantity} placeholder="Input Your Stock Quantity..." id="stock_quantity" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div>
                        <label htmlFor="price" className="block font-medium text-black text-xl my-1">Price</label>
                        <input type="text" name="price" defaultValue={price} placeholder="Type Your Food Price..." id="price" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div>
                        <label htmlFor="food_origin" className="block font-medium text-black text-xl my-1">Food Origin</label>
                        <input type="text" name="food_origin" defaultValue={food_origin} placeholder="Type Your Food Origin..." id="food_origin" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="made_by" className="block font-medium text-black text-xl my-1">Made By</label>
                        <input type="text" name="made_by" placeholder="Type Your Food Origin..." id="made_by" value={madeBy} readOnly className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="short_description" className="block font-medium text-black text-xl my-1">Short Description</label>
                        <textarea type="short_description" defaultValue={short_description} name="short_description" placeholder="Type Your Food Origin..." id="short_description" className="bg-transparent border-b-2 border-primaryCol outline-none rounded-none focus:bg-white py-2 px-2  w-full" />
                    </div>
                    <div className="md:col-span-2">
                        <div>
                            <button type="submit" className="text-white font-semibold w-full py-4 px-4 bg-primaryCol my-4 ">Update Item</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;