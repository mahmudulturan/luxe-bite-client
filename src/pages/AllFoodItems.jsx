import { useQuery } from "@tanstack/react-query";
import Title from "../components/Shared/Title";
import useAxios from "../hooks/useAxios";
import FoodCard from "../components/FoodCard/FoodCard";
import { useState } from "react";
import Loading from "../components/Loading/Loading";

const AllFoodItems = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [perPageCount, setPerPageCount] = useState(9);
    const [searchKey, setSearchKey] = useState("");
    const axios = useAxios();
    const url = `/all-food-items?page=${currentPage}&limit=${perPageCount}&search=${searchKey}`;
    const { data, isLoading } = useQuery({
        queryKey: ["allfoodItems", currentPage, perPageCount, url], queryFn: async () => {
            const res = await axios.get(url)
            return res;
        }
    })
    const handleSearch = () => {
        const searchKeyword = document.getElementById("search_key").value;
        setSearchKey(searchKeyword);
    }

    const productsCount = data?.data.count;
    const pageCount = Math.ceil(productsCount / perPageCount)
    const totalButton = [...Array(pageCount || []).keys()]

    return (
        <div className="max-w-7xl mx-auto p-1 md:p-0">
            <Title title="Our Menu">Delicious Selections</Title>
            <div>
                <div className="text-center md:text-right items-center">
                    <div className="join flex-col md:flex-row">
                        <div>
                            <div>
                                <input className="input join-item outline-none border-x-0 border-t-0 rounded-none border-secondaryCol border-b-2 bg-transparent focus:outline-none focus:bg-white transition-colors duration-200" placeholder="Search" id="search_key" />
        
                            </div>
                        </div>
                        <select className="select join-item rounded-none border-accentCol border-none focus:outline-none bg-secondaryCol text-darkSecondary hover:text-white font-semibold hover:bg-darkSecondary">
                            <option disabled selected>Filter</option>
                            <option>All</option>
                            <option>Sea Food</option>
                            <option>Fast Food</option>
                            <option>Gosto Bhat</option>
                        </select>
                        <div className="indicator">
                            <button onClick={handleSearch} className="btn join-item bg-secondaryCol text-darkSecondary hover:text-white hover:bg-darkSecondary border-accentCol border-none focus:outline-none">Search</button>
                        </div>
                    </div>
                </div>

                {
                    isLoading ?
                        <Loading></Loading>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                            {
                                data?.data.result.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                }

                <div className="mb-10 text-center">
                    <div className="join">
                        <button onClick={() => currentPage > 0 && setCurrentPage(currentPage - 1)} className="join-item btn bg-secondaryCol/60 outline-none border-none">Prev</button>
                        {
                            totalButton.map((button, indx) => <button onClick={() => setCurrentPage(button)} key={indx} className="join-item btn bg-secondaryCol/60 outline-none border-none">{button + 1}</button>)
                        }

                        <button onClick={() => currentPage < totalButton?.length - 1 && setCurrentPage(currentPage + 1)} className="join-item btn bg-secondaryCol/60 outline-none border-none">Next</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllFoodItems;