import { FaCheck } from "react-icons/fa";
const Services = () => {
    return (
        <div className="flex bg-white justify-center items-center">
            <div className="mt-20 grid grid-cols-1  lg:grid-cols-2">


                <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-right' className="flex flex-col justify-center  w-1/2">
                    <p className="text-blue-400">Our services</p>
                    <h2 className="text-black text-4xl font-bold">
                        Benefits of Graphic Design to Your Website’s Development?
                    </h2>
                </div>
                <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-right' className="w-1/2 ">
                    <button className="px-5 py-4 bg-orange-400 text-center font-bold">Our Portfolio</button>
                </div>


                <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-up' className="font-semibold text-lg text-gray-600">
                    <p>
                        A website with visual appeal communicates your brand’s value in a way that resonates with your target audience. It can also add to your site’s credibility and further position you as an industry leader.
                        <br />

                        An optimized user experience reduces friction and makes it easy for users to find the information they need as quickly as possible. This improves your site’s engagement and can indirectly boost your search engine rankings.
                        <br />

                        Graphic design improves your website’s value to its users. More importantly, it helps you generate more revenue by acquiring new clients and reducing the cost per client acquisition.
                    </p>
                </div>
                <div data-aos-duration="1000" data-aos-delay="100" data-aos='fade-right'>
                    <ul className="list-none text-gray-700">
                        <li className="flex font-bold gap-5 font-bol px-5 py-4 "><FaCheck />Visual Appela</li>
                        <li className="flex gap-5 px-5 py-4 bg-orange-400  font-bold"><FaCheck />Visual Appela</li>
                        <li className="flex gap-5 font-bold px-5 py-4"><FaCheck />Visual Appela</li>
                        <li className="flex gap-5 font-bold bg-orange-400 px-5 py-4"><FaCheck />Visual Appela</li>
                        <li className="flex gap-5 font-bold  px-5 py-4"><FaCheck />Visual Appela</li>
                        <li className="flex gap-5 font-bold bg-orange-400 px-5 py-4"><FaCheck />Visual Appela</li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Services;