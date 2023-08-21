import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Review = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 pt-20 pb-20">
            <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} useKeyboardArrows={true} showIndicators={true} >
                <div className="flex justify-center items-center flex-col space-y-5">
                    <p className="text-blue-300 text-center">Real-Life Results</p>
                    <h1 className="text-center text-4xl font-bold">How We Helped Our Clients</h1>
                    <p className="text-center font-semibold">Was a great addition to the team. Stuck to deadlines and put a ton of work in. Would recommend!</p>
                    <p>Daniel Tashnek</p>

                </div>
                <div className="flex justify-center items-center space-y-5 flex-col">
                    <p className="text-blue-300 text-center">Real-Life Results</p>
                    <h1 className="text-center text-4xl font-bold">How We Helped Our Clients</h1>
                    <p className="text-center font-semibold">Was a great addition to the team. Stuck to deadlines and put a ton of work in. Would recommend!</p>
                    <p>Daniel Tashnek</p>

                </div>
                <div className="flex justify-center space-y-5 items-center flex-col">
                    <p className="text-blue-300 text-center">Real-Life Results</p>
                    <h1 className="text-center text-4xl font-bold">How We Helped Our Clients</h1>
                    <p className="text-center font-semibold">Was a great addition to the team. Stuck to deadlines and put a ton of work in. Would recommend!</p>
                    <p>Daniel Tashnek</p>

                </div>
                <div className="flex justify-center space-y-5 items-center flex-col">
                    <p className="text-blue-300 text-center">Real-Life Results</p>
                    <h1 className="text-center text-4xl font-bold">How We Helped Our Clients</h1>
                    <p className="text-center font-semibold">Was a great addition to the team. Stuck to deadlines and put a ton of work in. Would recommend!</p>
                    <p>Daniel Tashnek</p>

                </div>
            </Carousel>
        </div>
    );
};

export default Review;