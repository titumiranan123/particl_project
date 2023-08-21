import Projectcard from "../Projectcard/Projectcard";
import projectImg from "../../../assets/p-1.jpg"
import projectImg2 from "../../../assets/p-2.jpg"
import projectImg3 from "../../../assets/p-3.jpg"
import projectImg4 from "../../../assets/p-4.jpg"
const Ourproject = () => {
    return (
        <div>
            <div
                data-aos-duration="1000" data-aos-delay="100" data-aos='flip-up'
                className="flex justify-center flex-col pt-10 items-center">
                <p className="text-center bg-yellow-4000">Our Project</p>
                <h1 className="text-center text-4xl font-bold">What We Have Developed For Our Clients?</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-1 lg:gap-5">
                    <div
                        data-aos-duration="1000" data-aos-delay="100" data-aos='fade-right'>
                        <Projectcard img={projectImg} heading={"Radiant Carft"} deccription={"Learn How to custom make your own Gemtone Swarovski Pearl necklace from scratch using beads."} />
                    </div>
                    <div
                        data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left'>
                        <Projectcard img={projectImg2} heading={"Radiant Carft"} deccription={"Learn How to custom make your own Gemtone Swarovski Pearl necklace from scratch using beads."} />
                    </div>

                    <div
                        data-aos-duration="1000" data-aos-delay="100" data-aos='fade-right'>
                        <Projectcard img={projectImg3} heading={"Radiant Carft"} deccription={"Learn How to custom make your own Gemtone Swarovski Pearl necklace from scratch using beads."} />
                    </div>
                    <div
                        data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left'>
                        <Projectcard img={projectImg4} heading={"Radiant Carft"} deccription={"Learn How to custom make your own Gemtone Swarovski Pearl necklace from scratch using beads."} />
                    </div>
                    <div
                        data-aos-duration="1000" data-aos-delay="100" data-aos='fade-right'>
                        <Projectcard img={projectImg3} heading={"Radiant Carft"} deccription={"Learn How to custom make your own Gemtone Swarovski Pearl necklace from scratch using beads."} />
                    </div>
                    <div
                        data-aos-duration="1000" data-aos-delay="100" data-aos='fade-left'>
                        <Projectcard img={projectImg} heading={"Radiant Carft"} deccription={"Learn How to custom make your own Gemtone Swarovski Pearl necklace from scratch using beads."} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ourproject;