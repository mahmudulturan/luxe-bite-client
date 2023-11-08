import BlogCard from "../components/BlogCard/BlogCard";
import Loading from "../components/Loading/Loading";
import Title from "../components/Shared/Title";
import useAxios from "../hooks/useAxios";
import { useQuery } from '@tanstack/react-query'


const Blogs = () => {
    const axios = useAxios();
    const {data, isLoading} = useQuery({queryKey: ["blogs"], queryFn: async()=> {
        const res = axios.get('/blogs')
        return res;
    }})
    return (
        <div>
                <Title title="Bite Blog">Savor Stories</Title>
                {
                    isLoading?
                    <Loading></Loading>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-6">
                        {
                            data?.data.map(blog => <BlogCard blog={blog} key={blog._id}></BlogCard>)
                        }


                    </div>
                }
        </div>
    );
};

export default Blogs;