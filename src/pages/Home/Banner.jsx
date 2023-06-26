
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '../../assets/rajib_design.png';
import { useState } from 'react';
import SocialModal from '../../components/SocialModal';

const Banner = () => {

    const [socialModal, setSocialModal] = useState(false);

    const handleCloseModal = () => setSocialModal(false);

    return (
        <div className='h-screen bg-[#071632] grid lg:grid-cols-2 grid-cols-1 items-center lg::px-40 px-5 py-5'>
            <img className='md:w-[30rem] mx-auto' src={myPhoto} alt="" />
            <div className='text-white md:w-[33rem] lg:mx-0 mx-auto'>
                <h1 className='md:text-[4.3rem] text-4xl font-semibold tracking-wider'> <span className='text-sm block ms-1 lg:mb-0 md:mb-1'>I am</span> RAJIB SADHU</h1>
                <div className='flex justify-between md:text-xl text-sm uppercase font-semibold h-[2rem] text-[#a6fcb1] mt-3'>
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

                <div className='mt-5 head_button md:w-[29rem]'>
                    <button className=''>Resume</button>
                    <button onClick={() => setSocialModal(true)} className=''>Contact</button>
                </div>

                <div>
                    {socialModal && <SocialModal handleCloseModal={handleCloseModal} />}
                </div>
            </div>
        </div>
    );
};

export default Banner;