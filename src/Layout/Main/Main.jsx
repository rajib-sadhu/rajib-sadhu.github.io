import { Outlet } from "react-router-dom";
import FlowtingMenu from "../../components/FlowtingMenu/FlowtingMenu";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div>
            <div className="fixed top-0 ">
                <FlowtingMenu/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;