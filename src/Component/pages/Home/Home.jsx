import Coursesection from "../../Partialcomponent/Course/Coursesection";
import Header from "../../Partialcomponent/Header/Header";
import Services from "../../Partialcomponent/Services/Services";
import Tool from "../../Partialcomponent/Tool_section/Tool";

const Home = () => {
    return (
        <div className="">
            <Header />
            <div className="bg-white px-[50px] lg:px-[120px] ">
                <Services />
                <Coursesection />
                <Tool />
            </div>

        </div>
    );
};

export default Home;