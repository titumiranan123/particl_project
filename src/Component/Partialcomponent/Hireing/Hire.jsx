import img from "../../../../src/assets/it_worker.avif";
const Hire = () => {
    return (
        <div className='bg-black mt-10 p-10 flex flex-wrap lg:flex-nowrap bg-transparent justify-center items-center gap-10 '>
            <div className="w-[50%]">
                <img src={img} alt="" />
            </div>
            <div className="space-y-10">
                <span className='bg-white p-2'>UI/UX</span>
                <h1 className="text-4xl text-white font-bold">Our consultation is always in sync with your strategy</h1>
                <p className="text-lg text-white font-semibold">
                    We are diverse, passionate, and highly curious tech enthusiasts who are sowing the seeds for a better tomorrow.
                </p>
                <button className='text-semibold py-4 px-8 bg-orange-600 text-white hover:bg-blue-600 rounded-xl'>
                    Hire Graphics & Web Designer
                </button>


            </div>

        </div>
    );
};

export default Hire;