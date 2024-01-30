import img1 from '../assets/calc.png'
import img2 from '../assets/GPACalculator.png'
import img3 from '../assets/LibraryManagement.png'
import img4 from '../assets/VirtualClassroom.png'

const Projects = () =>{
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center ">
             
            <h1 data-aos="fade-up" className="text-[52px] font-semibold mb-20 leading-normal text-red-500">Projects</h1>
            <div data-aos="fade-down" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
                <img height={250} width={250} className="flex items-center justify-center rounded-3xl border-2 border-red-500 b_glow" src={img1} alt="" />
                <img height={250} width={250} className="flex items-center justify-center rounded-3xl border-2 border-red-500 b_glow" src={img2} alt="" />
                <img height={250} width={250} className="flex items-center justify-center rounded-3xl border-2 border-red-500 b_glow" src={img3} alt="" />
                <img height={250} width={250} className="flex items-center justify-center rounded-3xl border-2 border-red-500 b_glow" src={img4} alt="" />
            </div>
        </div>
    );
};

export default Projects;