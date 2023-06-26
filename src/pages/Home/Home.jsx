import AboutMe from "./AboutMe";
import Banner from "./Banner";

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
        </div>
    );
};

export default Home;