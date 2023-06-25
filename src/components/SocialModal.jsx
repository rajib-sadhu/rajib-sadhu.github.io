

import { Link } from 'react-router-dom';
import './SocialModal.css'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiFillCloseCircle } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';

const SocialModal = ({ handleCloseModal }) => {
    return (
        <div className="social-modal-main">
            <div className='social-modal-contain'>
                <div className='md:w-[40rem] w-[15rem] md:h-[18rem] text-black bg-white rounded-md p-5' >
                    <div className='flex justify-between'>
                        <h1 className='md:text-xl font-semibold'>Contact me!</h1>
                        <button onClick={handleCloseModal} ><AiFillCloseCircle className='text-xl text-red-600'/></button>
                    </div>
                    <div className='mt-10' >
                        <div className='text-5xl flex md:gap-2 gap-5 justify-around flex-wrap'>
                            <Link><AiFillLinkedin /></Link>
                            <Link><AiFillFacebook /></Link>
                            <Link><AiFillGithub /></Link>
                            <Link><AiOutlineTwitter /></Link>
                            <Link><AiOutlineInstagram /></Link>
                        </div>
                        <div className='text-center mt-10 font-semibold md:text-xl'>
                            <div className='flex md:items-center md:flex-row flex-col md:gap-3 justify-center'>
                                <BiLogoGmail className='md:text-2xl text-red-500' />
                                <h2>rajib.sadhu1998@gmail.com</h2>
                            </div>
                            <div className='mt-5'>
                                <Link className='text-sm text-sky-600 underline' >Send Direct</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialModal;