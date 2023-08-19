import { Fade } from "react-awesome-reveal";
import { toast } from "react-hot-toast";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4allhpy', 'template_dtcuiq8', form.current, 'TzSPHZpEHdEDqvC_a')
            .then((result) => {
                console.log(result.text);
                toast.success('Message send successfully')
            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <div className="my-20 lg:px-36 px-5 overflow-hidden" id='contact'>
            <Fade>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="space-y-4">
                        <h2 className="md:text-6xl text-2xl font-">Let{`'`}s connect</h2>
                        <p className="md:text-xl">
                            If you want to know more about me or my work, or if you would just like to say hello, send me a message. I{`'`}d love to hear from you.
                        </p>
                        <div className="">
                            <div className='text-4xl flex md:gap-2 gap-5'>
                                <Link to='https://www.linkedin.com/in/rajibsadhu/'><AiFillLinkedin className='text-[#28579d] social-icon' /></Link>
                                <Link to='https://www.facebook.com/rajibsadhu.rs/'><AiFillFacebook className='text-sky-800 social-icon' /></Link>
                                <Link to='https://github.com/rajib-sadhu' ><AiFillGithub className='text-green-800 social-icon' /></Link>
                                <Link to='https://twitter.com/rajib_sadhu' ><AiOutlineTwitter className='text-sky-500 social-icon' /></Link>
                                <Link to='https://www.instagram.com/rajibsadhu_rs/' ><AiOutlineInstagram className='text-red-500 social-icon' /></Link>
                            </div>
                            <div className="flex items-center mt-5 gap-2 md:text-xl font-medium">
                                <BiLogoGmail className='md:text-4xl text-red-500' />
                                <h2>rajib.sadhu1998@gmail.com</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='px-5' id='bookTable'>

                            <form ref={form} className='grid grid-cols-1 gap-2' onSubmit={sendEmail}>
                                <input className='table-input' type="text" name="from_name" placeholder='Name' required />
                                <input className='table-input' type="email" name="from_email" placeholder='Email' required />
                                <textarea className="table-input" name="message" id="" cols="30" rows="10" placeholder="Write your feedback" required></textarea>
                                <input type="submit" value='Send'
                                    className='table-input text-white cursor-pointer uppercase bg-[#071632] duration-200 hover:bg-[#0f357c] font-bold'
                                    style={{
                                        border: 'none'
                                    }}
                                />
                            </form>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>
    );
};

export default Contact;