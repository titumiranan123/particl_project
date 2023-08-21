/* eslint-disable react/prop-types */

const Projectcard = ({ img, heading, deccription }) => {
    return (
        <div className="card w-full hover:-translate-y-3 lg:w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title ">{heading}</h2>
                <p>{deccription}</p>

            </div>
        </div>
    );
};

export default Projectcard;