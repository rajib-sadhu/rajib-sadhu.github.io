import Banner from "./Banner";
import FlowtingSocial from "./FlowtingSocial";


import './Home.css';
import MySkills from "./MySkills";
const Home = () => {
    return (
        <div className="">
            <Banner />
            <MySkills />




            <div className="fixed bottom-0 left-7">
                <FlowtingSocial />
            </div>
            <div className="fixed bottom-2 -right-20">
                <div className='h-32 w-[2px] mx-auto mb-32 bg-[#3ab049]' ></div>
                <h3 className="rotate-90 text-[#3ab049] text-xl font-semibold">rajib.sadhu1998@gmail.com</h3>
                <div className='h-32 w-[2px] mx-auto mt-32 bg-[#3ab049]' ></div>
            </div>
        </div>
    );
};

export default Home;