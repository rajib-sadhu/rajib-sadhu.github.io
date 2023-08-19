import { Outlet } from "react-router-dom";
import FlowtingMenu from "../../components/FlowtingMenu/FlowtingMenu";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import Intro from "../../components/Intro";


const Main = () => {

    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowIntro(false);
        }, 2500);
    
        return () => clearTimeout(timer);
      }, []);
    
      if(showIntro){
        return(
          <div>
            <Intro/>
          </div>
        )
      }

      

    return (
        <div>
            <div className="fixed top-0 z-50">
                <FlowtingMenu/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;