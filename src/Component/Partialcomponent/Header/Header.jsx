import Particl from "../Particle/Particle";


const Header = () => {

    return (
        <div
            className="bg-cover bg-center h-[640px]  bg-no-repeat flex justify-center items-center"
        >
            <Particl />
            <div className="w-2/4 mx-auto">
                <div className="bg-orange-500 text-white p-10">
                    <h2 className="text-4xl">JOIN THE LIST OF OUR 279,000+ <br /> SUBSCRIBERS</h2>
                    <h3 className="text-lg mt-5">RECEIVE LATEST DEALS & TIPS/TRICKS DIRECTLY TO THEIR INBOX. FOR FREE</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="E-MAIL"
                            className="px-6 py-2 mt-5 bg-gray-700 text-lg text-white focus:outline-none"
                        />
                        <button className="px-6 py-3 mt-5 text-white text-xl bg-transparent border border-white block">
                            SUBMIT NOW
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;