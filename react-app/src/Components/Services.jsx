const Services = () =>{
    return (
        <div id="Services" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-20 leading-normal text-red-500">Services</h1>
            <div data-aos="fade-up" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <h2 className="text-[26px] flex items-center justify-center font-semibold text-red-500 rounded-3x1 h-36 w-44 border-2 border-red-500 b_glow">HTML</h2>
                <h2 className="text-[26px] flex items-center justify-center font-semibold text-red-500 rounded-3x1 h-36 w-44 border-2 border-red-500 b_glow">CSS</h2>
                <h2 className="text-[26px] flex items-center justify-center font-semibold text-red-500 rounded-3x1 h-36 w-44 border-2 border-red-500 b_glow">JavaScript</h2>
                <h2 className="text-[26px] flex items-center justify-center font-semibold text-red-500 rounded-3x1 h-36 w-44 border-2 border-red-500 b_glow">React</h2>
            </div>
        </div>
    );
};

export default Services;