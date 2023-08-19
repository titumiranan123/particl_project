import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [navbar, setNavbar] = useState(false);
    const navitem = <>
        <Link className="group hover:text-orange-400 text-white  relative">
            Home
            <div className="flex group-hover:opacity-100 lg:hidden opacity-0 justify-center text-center absolute top-0 left-0 w-full h-full">
                <span className="border border-orange-500 transition-all duration-1000 ease-in group-hover:w-full group-hover:h-full"></span>
            </div>
        </Link>
        <Link className="group hover:text-orange-400 text-white  relative">
            Blog
            <div className="flex group-hover:opacity-100 lg:hidden opacity-0 justify-center text-center absolute top-0 left-0 w-full  h-full">
                <span className="border border-orange-500 transition-all duration-1000 ease-in group-hover:w-full group-hover:h-full"></span>
            </div>
        </Link>
        <Link className="group hover:text-orange-400 text-white  relative">
            About US
            <div className="flex group-hover:opacity-100 lg:hidden opacity-0 justify-center text-center absolute top-0 left-0 w-full h-full">
                <span className="border border-orange-500 transition-all duration-1000 ease-in group-hover:w-full group-hover:h-full"></span>
            </div>
        </Link>
        <Link className="group  hover:text-orange-400 text-white  relative">
            Contact US
            <div className="flex group-hover:opacity-100 lg:hidden opacity-0 justify-center text-center absolute top-0 left-0 w-full h-full">
                <span className="border border-orange-500 transition-all duration-1000 ease-in group-hover:w-full group-hover:h-full"></span>
            </div>
        </Link>
    </>
    return (
        <nav className="">

            <div className="flex  justify-between py-5 bg-slate-500 px-20">
                <div>
                    <span> logo</span>
                </div>
                <div className="lg:flex gap-5 hidden">
                    {navitem}
                </div>
                <div className="lg:hidden">
                    {
                        !navbar
                            ? <button className="text-3xl text-white" onClick={() => setNavbar(!navbar)} > <HiMenu /> </button >
                            : <></>
                    }

                </div>

            </div>
            {navbar && <div className=" sidebar fixed top-0 bottom-0 right-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-600">
                <button className="text-white text-3xl flex justify-end " onClick={() => setNavbar(!navbar)}>
                    <FaTimes />
                </button>
                <div className="text-gray-100 flex flex-col mt-10 gap-5">
                    {navitem}
                </div>

            </div>}

        </nav>
    );
}
export default NavBar;