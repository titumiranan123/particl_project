import AnswerQuestionsection from "../../Partialcomponent/Answerquestion/AnswerQuestionsection";
import Coursesection from "../../Partialcomponent/Course/Coursesection";
import Header from "../../Partialcomponent/Header/Header";
import Hire from "../../Partialcomponent/Hireing/Hire";
import Ourproject from "../../Partialcomponent/Ourproject/Ourproject";
import Review from "../../Partialcomponent/Review/Review";
import Services from "../../Partialcomponent/Services/Services";
import Tool from "../../Partialcomponent/Tool_section/Tool";

const Home = () => {
    return (
        <div className="">
            <Header />
            <div className="bg-white px-[50px] lg:px-[120px] h-[17000px]">
                <Services />
                <Coursesection />
                <Tool />
                <Review />
                <Ourproject />
                <Hire />
                <AnswerQuestionsection />
            </div>

        </div>
    );
};

export default Home;