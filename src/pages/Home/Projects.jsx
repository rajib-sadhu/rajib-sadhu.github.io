import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// import { Slide } from "react-awesome-reveal";
// import ImageSlick from "../../components/ImageSlick/ImageSlick";

import reelCamp from '../../assets/reel-camp.png'
import happyPlaytime from '../../assets/happy-playtime.png'
import incogniChat from '../../assets/incogniChat.png'
import food4you from '../../assets/food4you.png'
import ticTacToe from '../../assets/tictactoe.png'
import farniture from '../../assets/farniture-1.png'
import playerSign from '../../assets/player-sign.png'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Roll } from 'react-awesome-reveal';

const Projects = () => {


    let images = [
        {
            id: 1,
            title: 'Reel Camp',
            subTitle: 'full stack',
            img: reelCamp,
            disc: "LElevate summer breaks with film skills. Full-stack e-learning hub lets students learn filmmaking, while instructors share classes.",
            tech: ['react js', 'node js', 'express js', 'firebase', 'mongoDB', 'tailwind'],
            liveLink: 'https://rs-reel-camp.web.app',
            gitLink: 'https://github.com/rajib-sadhu/reel-camp-client'
        },
        {
            id: 2,
            title: 'happy Playtime',
            subTitle: 'full stack',
            img: happyPlaytime,
            disc: " Showcase your toys online. Add and display toy details seamlessly on the website, celebrating cherished playthings.",
            tech: ['react js', 'node js', 'express js', 'firebase', 'mongoDB', 'tailwind'],
            liveLink: 'https://rs-happy-playtime.web.app',
            gitLink: 'https://github.com/rajib-sadhu/happy-playtime-client'
        },
        {
            id: 3,
            title: 'IncogniChat',
            subTitle: 'Full Stack',
            img: incogniChat,
            disc: "Send anonymous links for replies. Engage in private conversations, identities concealed. Bridge connections while preserving anonymity.",
            tech: ['react js', 'node js', 'express js', 'firebase', 'tailwind', 'mongoDB'],
            liveLink: 'https://incognichat-app.web.app/',
            gitLink: 'https://github.com/rajib-sadhu/rs-incognichat'
        },
        {
            id: 4,
            title: 'Food4You',
            subTitle: 'Front End',
            img: food4you,
            disc: "Explore top chefs and delectable recipes. Exclusive access post-login to savor culinary delights and culinary maestros.",
            tech: ['react js', 'node js', 'express js', 'firebase', 'tailwind'],
            liveLink: 'https://rs-food4you.web.app/',
            gitLink: 'https://github.com/rajib-sadhu/food4you-client-side'
        },
        {
            id: 5,
            title: 'Tic Tac Toe',
            subTitle: 'Game',
            img: ticTacToe,
            disc: "Classic two-player game. Experience fun clashes, unveil winners as the game concludes, and the champion emerges.",
            tech: ['Html', 'css', 'javascript'],
            liveLink: 'https://rajib-sadhu.github.io/tictactoe',
            gitLink: 'https://github.com/rajib-sadhu/tictactoe'
        },
        {
            id: 6,
            title: 'Furniture',
            subTitle: 'Front end page',
            img: farniture,
            disc: "Engaging front-end design showcase. Scroll to experience captivating animations and designs, offering a visual delight in furniture.",
            tech: ['react js', 'css', 'tailwind'],
            liveLink: 'https://rs-furniture-store.netlify.app',
            gitLink: 'https://github.com/rajib-sadhu'
        },
        {
            id: 7,
            title: 'Player Sign',
            subTitle: 'Front end page',
            img: playerSign,
            disc: "Intuitive front-end page. Easily sign up and manage players. Effortlessly add and remove players with user-friendly controls.",
            tech: ['html', 'css', 'javascript', 'tailwind'],
            liveLink: 'https://rs-player-sign.netlify.app/',
            gitLink: 'https://github.com/rajib-sadhu/player-sign'
        },
    ];


    const [allProjects, setAllProject] = useState(images.slice(0, 6))


    return (
        <div className="my-20 lg:px-36 px-5" id='projects'>
            <div>
                <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">

                {
                    allProjects.map((item) => <Roll key={item.id}>
                        <div className='project-div min-h-[28rem]' >
                            <div className='shadow-xl rounded-lg overflow-hidden relative min-h-[24.5rem]'>
                                <div>
                                    <img className='h-[12rem] w-full object-cover hover:object-contain bg-cover'
                                        style={{
                                            backgroundImage: `url(${item.img})`
                                        }}
                                        src={item.img} alt="" />
                                    <Link onClick={() => { toast.error('Sorry! project details coming soon.'); }} className='absolute top-3 right-3' title='See project detail' ><BsFillInfoCircleFill className='text-sky-100 text-xl hover:text-sky-400 bg-black rounded-[50%] p-[1px]' /></Link>
                                </div>
                                <div className='p-5'>
                                    <div className='relative' >
                                        <div className='border-2 border-s-0  text-black bg-white uppercase absolute -left-5 -top-12 py-3 px-5'>
                                            <h4 className='font-medium inline-block text-xl' > {item.title} </h4>
                                            <p className='inline-block ms-2 text-[10px]'>({item.subTitle})</p>
                                        </div>
                                    </div>
                                    <div className='pt-5'>
                                        {item.disc}
                                    </div>
                                    <div className='flex items-center flex-wrap pt-3 gap-3 capitalize'>
                                        {
                                            (item.tech).map((t, i) => <p key={i} className='px-2 rounded-full border border-sky-600 text-sky-800 font-medium text-sm hover:bg-slate-500 hover:text-white' >{t}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='project-links shadow-md' >
                                <div className='py-3 flex justify-center gap-10 ' >
                                    <a href={item.liveLink} target='_blacnk' className='text-blue-600 font-semibold' >Live Site <MdKeyboardDoubleArrowRight className='inline' /> </a>
                                    <a href={item.gitLink} target='_blacnk' className='text-green-800 font-semibold'>Repo <MdKeyboardDoubleArrowRight className='inline' /></a>
                                </div>
                            </div>
                        </div>
                    </Roll>)
                }


            </div>
            <div className='text-center pt-5'>
                {
                    allProjects.length > 6 ?
                        <button onClick={() => setAllProject(images.slice(0, 6))} className='bg-sky-600 px-5 pt-2 pb-2 uppercase text-white text-sm rounded-md' >See Less</button>
                        :
                        <button onClick={() => setAllProject(images)} className='bg-sky-600 px-5 pt-2 pb-2 uppercase text-white text-sm rounded-md' >See All</button>
                }
            </div>
        </div>
    );
};

export default Projects;