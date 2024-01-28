import {AiFillGithub} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import img from '../assets/Grad.jpg'

const Banner = () =>{
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal">Welcome To <span className="text-red-500">My website</span></h1>
                <p>Hi my name is Endy and this is my react portfolio page. I am seriously gifted jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj oooooooooooooo yiggugkjgkj at waffling. If you don't believe me, you will soon have a reason to</p>
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
            <img src={img} width={290} height={290} className='border-2 p-1 border-red-500 img_glow' alt='Picture of Fine Boy'/>
        </div>
    );
};

export default Banner; 