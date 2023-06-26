
import Tilt from 'react-parallax-tilt';


const AboutMe = () => {



    return (
        <div className="my-20 lg:px-36 px-5 overflow-hidden" id='about'>
            <div>
                <h2 className="text-3xl font-bold">About Me</h2>
            </div>


            <div className="grid grid-cols-5 mt-5 items-center gap-5">
                <p className="col-span-3 text-lg">
                    This is <span className="text-xl font-semibold text-blue-900" > Rajib Sadhu </span>
                    I’m a MERN developer. I have completed my B.Tech in Electronics and Communications from Adamas University.
                    But during my college we had some other computer related subjects like C and Java and I discovered that I was more interested towards Programming.
                    Then I started to learn Java, HTML, CSS, JavaScript and did some personal projects with that.
                    Then I explored the most popular library ReactJS and for the backend I explored node.js, express.js and MongoDB as a database. And I am too much passionate about video games like - FIFA, COD, Efootball etc, and have some experience on Graphics Design, Video Editing, And Basic Microsoft Office skills.
                </p>
                <div className="col-span-2 ms-auto" >
                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                        <img className="w-[25rem] rounded-full" src="https://rajib-sadhu.github.io/portfolio/content/rajib_about.jpg" alt="" />
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;