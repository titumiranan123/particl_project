import { useEffect } from "react";
import AnswerQuestionsection from "../../Partialcomponent/Answerquestion/AnswerQuestionsection";
import Artilce from "../../Partialcomponent/Article/Artilce";
import Coursesection from "../../Partialcomponent/Course/Coursesection";
import Footer from "../../Partialcomponent/Footer/Footer";
import Header from "../../Partialcomponent/Header/Header";
import Hire from "../../Partialcomponent/Hireing/Hire";
import Ourproject from "../../Partialcomponent/Ourproject/Ourproject";
import Review from "../../Partialcomponent/Review/Review";
import Services from "../../Partialcomponent/Services/Services";
import Tool from "../../Partialcomponent/Tool_section/Tool";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
        });

    }, [])
    return (
        <div className="">
            <Header />
            <div className="bg-white px-[50px] lg:px-[120px] ">
                <Services />
                <Coursesection />
                <Tool />
                <Review />
                <Ourproject />
                <Hire />
                <AnswerQuestionsection />
                <Artilce />
                <Footer />
            </div>

        </div>
    );
};

export default Home;