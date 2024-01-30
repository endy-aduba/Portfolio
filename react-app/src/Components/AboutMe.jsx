import img from '../assets/Grad.jpg'

const AboutMe = () =>{
    return (
        <div id="AboutMe" className="">
            
            <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img src={img} width={290} height={290} data-aos="fade-up" className='border-2 p-1 border-red-500 img_glow' alt='Picture of Fine Boy'/>
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 className="text-[52px] font-semibold mb-8 leading-normal text-red-500" >About Me</h1>
                <p>Currently rebooting my passion in the tech world, coding not just with skills but with stories to tell. Here in my digital playground, I merge the analytical mindset of a banker with the innovative spirit of a software engineer. I'm all about turning complex problems into elegant solutions, one line of code at a time, while having a blast doing it.</p>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className = "flex space-x-2">
                        <a href="https://1drv.ms/b/s!AjbH-Wq-g9mV1BZwY8XLYvtux0Ny?e=ZyhdLP">
                            <button className='neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 hover:bg-red-500 border-red-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden' >
                                Resume
                            </button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;