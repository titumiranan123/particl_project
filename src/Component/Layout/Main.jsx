import { Outlet } from "react-router-dom";
import NavBar from "../share/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <NavBar />

            <Outlet />
        </div>
    );
};

export default Main;