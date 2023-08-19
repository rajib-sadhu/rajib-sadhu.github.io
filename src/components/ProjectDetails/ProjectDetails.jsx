import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProjectDetails = ({ project}) => {
    console.log(project)
    return (
        <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-6xl">
                <h3 className="font-bold text-lg mb-2">Project Details</h3>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3" >
                    <div>
                        <Carousel>
                            {
                                project?.images.map((v, i) => <div key={i}>
                                    <img src={v} className="border-2 border-red-700" />
                                </div>)
                            }
                        </Carousel>
                    </div>
                    <div className="flex flex-col justify-between" >
                        <div>
                            <h3 className="text-2xl mb-3 font-semibold uppercase" >{project?.title}</h3>
                            <p>
                                {project?.disc}
                            </p>
                        </div>
                        <div>
                            <h4 className="my-1 font-semibold text-lg" >Features</h4>
                            <ul className="text-sm list-disc ms-4" >
                                {
                                    project?.features?.map((v, i) => <li key={i}>{v}</li>)
                                }
                            </ul>
                        </div>
                        <div className="mt-5 flex gap-5 flex-wrap text-blue-700 font-semibold" >
                            {
                                project?.tech.map((v, i) => <p key={i} className="badge badge-outline" >{v}</p>)
                            }
                        </div>
                        <div className="mt-5 flex justify-center gap-3" >
                            <a href={project?.liveLink} target='_blank' className="btn btn-sm btn-success hover:btn-warning" >Live Link</a>
                            <a href={project?.gitLink} target='_blank' className="btn btn-sm btn-neutral hover:btn-warning" >Github Link</a>
                        </div>
                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default ProjectDetails;