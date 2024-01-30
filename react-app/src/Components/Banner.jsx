import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import img from '../assets/metrologo2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })

const Banner = () =>{
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div data-aos="fade-up" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal">Welcome To <span className="text-red-500">My website</span></h1>
                <p>Hey there! My name is Nnamdi Anthony. Please call me Endy. I am a Software Engineer who took a detour into the world of banking, only to find my way back to the amazing world of software engineering – for realzies this time!</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className = "flex space-x-2">
                            <a href="" className="text-red-500 hover:text-red-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a href="" className="text-red-500 hover:text-red-500 rounded-full glow p-2">
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a href="" className="text-red-500 hover:text-red-500 rounded-full glow p-2">
                                <FaYoutube className="text-[28px]"/>
                            </a>
                            <a href="" className="text-red-500 hover:text-red-500 rounded-full glow p-2">
                                <TbWorldWww className="text-[28px]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={img} width={290} height={290} data-aos="fade-left" className='border-2 p-1 border-red-500 rounded-full img_glow' alt='Metrolox Logo'/>
        </div>
    );
};

export default Banner; 