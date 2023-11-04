import Header from "../components/Header/Header";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-textCol font-montserrat">Hello this is main</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;