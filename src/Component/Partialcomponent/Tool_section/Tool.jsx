import Toolcard from "../Toolcard/Toolcard";
import img1 from '../../../assets/ai.avif'
import img2 from '../../../assets/phs.avif'
const Tool = () => {
    return (
        <div className="pt-20">
            <div className="bg-gradient-to-r from-yellow-200 to-pink-200 ">
                <h2 className="text-4xl text-center pt-10">Tools We Majorly Use</h2>
                <div className="bg-gradient-to-r from-yellow-200 to-pink-200 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img2} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />
                    <Toolcard img={img1} heading={"Adobe Illustrator"} description={"Adobe Illustrator, the vector graphics app that lets us create logos, icons, drawings, Flyers etc."} />

                </div>
            </div>


        </div>
    );
};

export default Tool;