import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from "recharts";


const MySkills = () => {

    const data = [
        {
            "tech": "Front-End",
            "know": 80,
            "fullMark": 100
        },
        {
            "tech": "Back-End",
            "know": 65,
            "fullMark": 100
        },
        {
            "tech": "Database",
            "know": 50,
            "fullMark": 100
        }
    ]

    return (
        <div className="my-20 md:px-36 px-5">
            <div>
                <h2 className="text-3xl font-bold">My Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 py-5">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-3" >
                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center">
                            <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="" />
                            <h4 className="text-2xl font-semibold" >HTML</h4>
                        </div>

                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="80" max="100" className="html-progress"> </progress>
                            <h5 className="text-2xl font-bold" >90%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />
                            <h4 className="text-2xl font-semibold" >CSS</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="80" max="100" className="css-progress"> </progress>
                            <h5 className="text-2xl font-bold" >80%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8 rounded-md" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                            <h4 className="text-2xl font-semibold" >Javascript</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="75" max="100" className="js-progress"> </progress>
                            <h5 className="text-2xl font-bold" >75%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8 rounded-md" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="" />
                            <h4 className="text-2xl font-semibold" >React Js</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="85" max="100" className="react-progress"> </progress>
                            <h5 className="text-2xl font-bold" >85%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://w1.pngwing.com/pngs/885/534/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png" alt="" />
                            <h4 className="text-2xl font-semibold" >Node Js</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="65" max="100" className="node-progress"> </progress>
                            <h5 className="text-2xl font-bold" >65%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" />
                            <h4 className="text-2xl font-semibold" >Express Js</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="50" max="100" className="express-progress"> </progress>
                            <h5 className="text-2xl font-bold" >50%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript-thumbnail.png" alt="" />
                            <h4 className="text-2xl font-semibold" >MongoDB</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="70" max="100" className="mongodb-progress"> </progress>
                            <h5 className="text-2xl font-bold" >70%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png" alt="" />
                            <h4 className="text-2xl font-semibold" >Firebase</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="85" max="100" className="firebase-progress"> </progress>
                            <h5 className="text-2xl font-bold" >85%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                            <h4 className="text-2xl font-semibold" >Git</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="55" max="100" className="git-progress"> </progress>
                            <h5 className="text-2xl font-bold" >55%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" />
                            <h4 className="text-2xl font-semibold" >Bootstrap</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="85" max="100" className="bootstrap-progress"> </progress>
                            <h5 className="text-2xl font-bold" >85%</h5>
                        </div>
                    </div>

                    <div className="space-y-2 shadow-xl p-5 bg-slate-100">
                        <div className="flex items-center gap-2">
                            <img className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                            <h4 className="text-2xl font-semibold" >tailwind</h4>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <progress id="file" value="90" max="100" className="tailwind-progress"> </progress>
                            <h5 className="text-2xl font-bold" >90%</h5>
                        </div>
                    </div>
                </div>

                <div className="md:w-full w-[90%] mx-auto">
                    <ResponsiveContainer width="100%">
                        <RadarChart data={data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="tech" />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} />
                            <Radar name="Mike" dataKey="know" stroke="#071632" fill="#071632" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default MySkills;