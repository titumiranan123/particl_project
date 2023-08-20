import Coursecard from "../Coursecard/Coursecard";


import img1 from '../../../assets/course1.avif'

const Coursesection = () => {

    return (
        <div>
            <div className="flex justify-center flex-col mt-20 items-center">
                <p className="text-center text-blue-600 font-semibold">Our Services</p>
                <p className="text-4xl font-bold">What we do in Graphic Designing?
                </p>
            </div>

            <div className=" bg-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
                <div className="hover:-translate-y-4">
                    <Coursecard img={img1} heading={"Logo & Art Work"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti perferendis! Eligendi placeat a quo." />
                </div>
                <div className="hover:-translate-y-4">
                    <Coursecard img={img1} heading={"Graphic Desing"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti perferendis! Eligendi placeat a quo." />
                </div>
                <div className="hover:-translate-y-4">
                    <Coursecard img={img1} heading={"Web devlopment"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti perferendis! Eligendi placeat a quo." />
                </div>
                <div className="hover:-translate-y-4">
                    <Coursecard img={img1} heading={"Logo & Art Work"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti perferendis! Eligendi placeat a quo." />
                </div>
                <div className="hover:-translate-y-4">
                    <Coursecard img={img1} heading={"Graphic Desing"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti perferendis! Eligendi placeat a quo." />
                </div>
                <div className="hover:-translate-y-4">
                    <Coursecard img={img1} heading={"Web devlopment"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, corrupti perferendis! Eligendi placeat a quo." />
                </div>




            </div>
        </div>
    );
};

export default Coursesection;