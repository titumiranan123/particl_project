
// eslint-disable-next-line react/prop-types
const Toolcard = ({ img, heading, description }) => {
    return (
        <div className="flex flex-col justify-center items-center border shadow-xl gap-5 w-full   lg:w-96 rounded-md space-y-4 p-4 ">
            <img className="h-24 w-24 rounded-full border border-black mt-10" src={img} alt="" />
            <h2 className="text-xl font-bold ">{heading}</h2>
            <p className="text-center">{description}</p>

        </div>
    )
};

export default Toolcard;