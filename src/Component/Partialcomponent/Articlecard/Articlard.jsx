import img from "../../../assets/b-1.avif";
const Articlard = () => {
    return (
        <div className="card space-y-4">
            <img className="rounded-xl" src={img} alt="" />
            <p className="text-orange-500">Uncategorized</p>
            <h1 className="text-xl font-semibold">Let&apos;s talk about Techbit Solutions</h1>
            <button className="border-b-2 border-orange-500 font-semibold text-lg w-32 hover:border-2 p-2">React Article</button>

        </div>
    );
};

export default Articlard;