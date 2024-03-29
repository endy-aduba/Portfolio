/*
Portfolio for Metrolox
Nnamdi Aduba
301343533
2024-02-01
*/
import {useState} from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import img from '../assets/metrologo.jpg'

const Nav = () =>{
    const [click, setClick] =useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>

        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to = "HomePage">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to = "AboutMe">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">AboutMe</li>
                </Link>
                <Link spy={true} smooth={true} to = "Services">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
                </Link>
                <Link spy={true} smooth={true} to = "Projects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
                </Link>
                <Link spy={true} smooth={true} to = "Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
                
                
                
            </ul>
        </div>
        </>
        return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
                <div className="flex-shrink-0">
                    <img src={img} className="h-10 w-auto"/>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[20px] justify-center font-semibold">
                        <Link spy={true} smooth={true} to = "HomePage">
                            <li className="hover:text-red-600 transition boarder-b-2 border-slate-900 hover:border-red-500 cursor-pointer">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "AboutMe">
                            <li className="hover:text-red-600 transition boarder-b-2 border-slate-900 hover:border-red-500 cursor-pointer">AboutMe</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Services">
                            <li className="hover:text-red-600 transition boarder-b-2 border-slate-900 hover:border-red-500 cursor-pointer">Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Projects">
                            <li className="hover:text-red-600 transition boarder-b-2 border-slate-900 hover:border-red-500 cursor-pointer">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to = "Contact">
                            <li className="hover:text-red-600 transition boarder-b-2 border-slate-900 hover:border-red-500 cursor-pointer">Contact</li>
                        </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className="block sm:hidden transtion" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
            </div>
        </nav>
    );
};

export default Nav;