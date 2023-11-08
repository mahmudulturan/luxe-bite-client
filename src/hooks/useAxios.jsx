import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://luxe-bite-server.vercel.app',
    withCredentials: true,
  });

const useAxios = () => {
    return instance;
};

export default useAxios;