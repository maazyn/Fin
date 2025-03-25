import { NavLink, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "../../hooks/useAuth";
// import { FaRegUser } from "react-icons/fa";
import { FiSave } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";



const Navbar = () => {
    // const navigate = useNavigate()
    const { user } = useAuth();
    return (
        <nav className="flex flex-row bg-transparent h-[33px] w-full items-center justify-end ">
            <div className="bg-white flex flex-row w-full lg:w-[300px] md:w-[210px] items-center justify-between h-full rounded-md transition-all duration-300">
                <NavLink className="logo ml-3 text-black" to="/dashboard">
                    <img className="nav-app-logo" src="/assets/fin-logo.png" alt="Logo" />
                </NavLink>

                <div className="flex flex-row gap-6 mx-3" >
                    {user && (
                    <>
                        <NavLink to={"/saved"} className="bg-transparent self-center text-black" >
                            <FiSave className="w-[20px] h-[20px] hover:scale-110"  />
                        </NavLink>
                        <NavLink to={"/settings"} className="bg-transparent self-center text-black" >
                            <FiSettings className="w-[20px] h-[19px] hover:scale-110"  />
                        </NavLink>
                    </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
