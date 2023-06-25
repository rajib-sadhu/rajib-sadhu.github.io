
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '../../assets/rajib_design.png'

const Banner = () => {
    return (
        <div className='h-screen bg-[#071632] grid md:grid-cols-2 grid-cols-1 items-center px-40'>
            <img className='w-[30rem]' src={myPhoto} alt="" />
            <div className='text-white w-[30rem]'>
                <h1 className='text-[4.3rem] font-semibold tracking-wider'> <span className='text-sm block -mb-5 ms-1'>I am</span> RAJIB SADHU</h1>
                <div className='flex justify-between text-xl uppercase font-semibold h-[2rem] text-[#a6fcb1] '>
                    <Typewriter
                        words={['MERN Stack Developer', 'React JS Developer', 'Front End Developer', 'Full Stack Developer']}
                        loop={true}
                        cursor
                        cursorStyle=''
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </div>
                <p className='font-semibold mt-5'>
                    I’m a Web Developer. Actually I went to Engineer college for ECE and <span className='text-[#3ab049]' >returned</span> as a programmer. {`I'm`} currently focused on expanding my experience designing and developing high performing websites.
                </p>

                <div className='mt-5 head_button'>
                    <button className=''>Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;