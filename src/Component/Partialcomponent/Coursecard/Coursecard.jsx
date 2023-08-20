/* eslint-disable react/prop-types */

const Coursecard = ({ img, heading, description }) => {
    return (
        <div className="flex flex-col justify-center items-center border shadow-xl gap-5  border-red-600 lg:w-96 w-full rounded-md space-y-4 p-4 ">
            <img className="h-24 w-24 rounded-full border border-black mt-10" src={img} alt="" />
            <h2 className="text-xl font-bold ">{heading}</h2>
            <p className="text-center">{description}</p>

        </div>
    );
};

export default Coursecard;