import Answerquestion from "./Answerquestion";

const AnswerQuestionsection = () => {
    return (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 mt-10">
            <div className="col-span-1">
                <h1 className="text-4xl font-bold">Digital Product Design Service</h1>
                <p className="text-lg">All Your Questions Answered</p>
            </div>

            <div className="col-span-2">
                <Answerquestion />
            </div>
        </div>
    );
};

export default AnswerQuestionsection;