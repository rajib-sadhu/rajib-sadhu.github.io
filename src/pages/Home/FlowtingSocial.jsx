
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const FlowtingSocial = () => {
    return (
        <div className='text-[#3ab049]'>
            <div className='h-40 w-[2px] mx-auto mb-2 bg-[#3ab049]' ></div>
            <div className='text-3xl flex flex-col gap-2'>
                <Link><AiFillLinkedin /></Link>
                <Link><AiFillFacebook /></Link>
                <Link><AiFillGithub /></Link>
                <Link><AiOutlineTwitter /></Link>
                <Link><AiOutlineInstagram /></Link>
            </div>
            <div className='h-40 w-[2px] mx-auto mb-2 mt-2 bg-[#3ab049]' ></div>

        </div>
    );
};

export default FlowtingSocial;