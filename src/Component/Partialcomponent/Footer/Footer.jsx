import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 px-10 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="space-y-7">
                    <h1 className="text-5xl font-bold">Tech <span className="text-[#FF6F69]">Bit</span></h1>
                    <p className="flex gap-8 "><FaPhone className="text-[#FF6F69]" /> <span>+91175069966</span> </p>
                    <p className="flex gap-8 "><FaLocationDot className="text-[#FF6F69]" /> 1399 Wellington St. W, Ottawa Ontario K1Y 2X1, Canada </p>
                    <p className="flex gap-8 "><FaLocationDot className="text-[#FF6F69]" /> C203, Phase 8b, Industrial Area Focal Point, Sahibzada Ajit Singh Nagar, Mohali, 140308</p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Support</h1>
                    <p className="text-lg font-semibold hover:text-[#FF6F69]">About</p>
                    <p className="text-lg font-semibold hover:text-[#FF6F69]">Contact</p>
                    <p className="text-lg font-semibold hover:text-[#FF6F69]">Privacy Policy</p>
                    <p className="text-lg font-semibold hover:text-[#FF6F69]">Code of Conduct</p>
                    <p className="text-lg font-semibold hover:text-[#FF6F69]">Statement on Modern Slavery </p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Follow us</h1>
                    <div className="flex gap-4 mt-6">
                        <FaFacebook className="bg-[#FF6F69]  text-4xl p-1 text-white rounded-full " />
                        <FaTwitter className="bg-[#FF6F69]  text-4xl p-1 text-white rounded-full " />
                        <FaInstagram className="bg-[#FF6F69]  text-4xl p-1 text-white rounded-full " />
                        <FaLinkedin className="bg-[#FF6F69]  text-4xl p-1 text-white rounded-full " />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
