import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllFoodItems from "../pages/AllFoodItems";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FoodDetail from "../pages/FoodDetail";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Order from "../pages/Order";
import AddItem from "../pages/AddItem";
import MyFoodItems from "../pages/MyFoodItems";
import MyOrderedItems from "../pages/MyOrderedItems";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-items',
                element: <AllFoodItems></AllFoodItems>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-food-items',
                element: <MyFoodItems></MyFoodItems>
            },
            {
                path: '/add-item',
                element: <AddItem></AddItem>
            },
            {
                path: '/my-ordered-items',
                element: <MyOrderedItems></MyOrderedItems>
            },
            {
                path: '/all-item/:id',
                element: <FoodDetail></FoodDetail> 
            },
            {
                path: '/order/:id',
                element: <PrivateRoute><Order></Order></PrivateRoute> 
            },
        ]
    }
])

export default MainRoutes;