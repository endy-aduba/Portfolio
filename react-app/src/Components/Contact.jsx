/*
Portfolio for Metrolox
Nnamdi Aduba
301343533
2024-02-01
*/
const Contact = () =>{
    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal text-red-500">Contact Me</h1>
            <form data-aos="fade-right" action="" className="flex flex-col gap-2 lg:w-1/2">
                <div className="lg:flex gap-6">
                    <input placeholder= "Name" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 b_glow text-xl text-white border-red-500" type="text" />
                    <input placeholder= "Email" className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 b_glow text-xl text-white border-red-500" type="email" />
                  
                </div>
                <textarea placeholder= "Type in your Message" className="text-white w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-red-500" type="text b_glow text-xl text-white" name="" id="" cols="20" rows="10"></textarea>
                <button className="neno-button shadow-xl text-white hover:bg-red-500 uppercase rounded-lg py-4 px-8 relative overflow-hidden b_glow text-xl text-bold" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;