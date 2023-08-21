import Articlard from '../Articlecard/Articlard';

const Artilce = () => {
    return (
        <div>
            <div className='flex justify-between mt-20'>
                <div>
                    <p className="text-blue-400">Business resources </p>
                    <h2 className='text-bold  text-4xl'>Great business resources from industry leaders</h2>
                </div>
                <button className='bg-[#FF6F69] py-2 rounded-xl px-10 font-semibold'>View all Articles</button>
            </div>


            <div className='mt-20 grid-cols-1 gap-5 grid lg:grid-cols-3'>
                <Articlard />
                <Articlard />
                <Articlard />
            </div>
        </div>
    );
};

export default Artilce;