import Toolcard from "../Toolcard/Toolcard";
import img1 from '../../../assets/ai.avif'
import img2 from '../../../assets/phs.avif'
const Tool = () => {
    return (
        <div className="pt-20">
            <div className="bg-gradient-to-r from-yellow-200 to-pink-200 ">
                <h2 className="text-4xl text-center pt-10">Tools We Majorly Use</h2>
                <div className="bg-gradient-to-r from-yellow-200 to-pink-200 p-5 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img2} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />

                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-10 space-y-5 pb-20">
                <p className="text-center text-lg font-semibold">We use most of the Modern Designing tools for Graphics & Web Design such as WordPress, HTML5, CSS3, SASS, Coral Draw, Webflow etc.</p>
                <button className="bg-pink-400 py-3 px-5 text-center rounded-lg hover:bg-pink-500">Let &apos;s Discuss Your Requirements</button>

            </div>

        </div>
    );
};

export default Tool;