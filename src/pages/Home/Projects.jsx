import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import data from './data.js';

import { useState } from 'react';
import { Roll } from 'react-awesome-reveal';
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';

const Projects = () => {


   


    const [allProjects, setAllProject] = useState(data.slice(0, 6));
    const [project, setProject] = useState(null);


    return (
        <div className="my-20 lg:px-36 px-5" id='projects'>
            <div>
                <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <ProjectDetails project={project} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">

                {
                    allProjects.map((item) => <Roll key={item?.id}>
                        <div className='project-div min-h-[28rem]' >
                            <div className='shadow-xl rounded-lg overflow-hidden relative min-h-[24.5rem]'>
                                <div>
                                    <img className='h-[12rem] w-full object-cover hover:object-contain bg-cover object-center'
                                        style={{
                                            backgroundImage: `url(${item?.images[0]})`
                                        }}
                                        src={item.img} alt="" />
                                    <button
                                        onClick={async () => {
                                            setProject(item)
                                            window.my_modal_2.showModal()
                                        }}
                                        className='absolute top-3 right-3' title='See project detail' ><BsFillInfoCircleFill className='text-sky-100 text-3xl hover:text-sky-400 bg-black rounded-full p-[1px]' /></button>
                                </div>
                                <div className='p-5'>
                                    <div className='relative' >
                                        <div className='border-2 border-s-0  text-black bg-white uppercase absolute -left-5 -top-12 py-3 px-5'>
                                            <h4 className='font-medium inline-block text-xl' > {item?.title} </h4>
                                            <p className='inline-block ms-2 text-[10px]'>({item?.subTitle})</p>
                                        </div>
                                    </div>
                                    <div className='pt-5'>
                                        {item?.disc}
                                    </div>
                                    <div className='flex items-center flex-wrap pt-3 gap-3 capitalize'>
                                        {
                                            (item?.tech).map((t, i) => <p key={i} className='px-2 rounded-full border border-sky-600 text-sky-800 font-medium text-sm hover:bg-slate-500 hover:text-white' >{t}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='project-links shadow-md' >
                                <div className='py-3 flex justify-center gap-10 ' >
                                    <a href={item.liveLink} target='_blank' className='text-blue-600 font-semibold' >Live Site <MdKeyboardDoubleArrowRight className='inline' /> </a>
                                    <a href={item.gitLink} target='_blank' className='text-green-800 font-semibold'>Repo <MdKeyboardDoubleArrowRight className='inline' /></a>
                                </div>
                            </div>
                        </div>
                    </Roll>)
                }


            </div>
            <div className='text-center pt-5'>
                {
                    allProjects.length > 6 ?
                        <button onClick={() => setAllProject(data.slice(0, 6))} className='bg-sky-600 px-5 pt-2 pb-2 uppercase text-white text-sm rounded-md' >See Less</button>
                        :
                        <button onClick={() => setAllProject(data)} className='bg-sky-600 px-5 pt-2 pb-2 uppercase text-white text-sm rounded-md' >See All</button>
                }
            </div>
        </div>
    );
};

export default Projects;