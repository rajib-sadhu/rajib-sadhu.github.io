import { Outlet } from "react-router-dom";
import FlowtingMenu from "../../components/FlowtingMenu/FlowtingMenu";


const Main = () => {
    return (
        <div>
            <div className="fixed top-0 ">
                <FlowtingMenu/>
            </div>
            <Outlet/>
        </div>
    );
};

export default Main;