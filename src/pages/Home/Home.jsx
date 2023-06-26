import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";

import './Home.css';
import MySkills from "./MySkills";
import Projects from "./Projects";
const Home = () => {

    

    return (
        <div className="">
            <Banner />
            <MySkills />
            <Projects/>
            <AboutMe/>
            <Contact/>
        </div>
    );
};

export default Home;