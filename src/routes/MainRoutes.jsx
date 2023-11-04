import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>
    }
])

export default MainRoutes;