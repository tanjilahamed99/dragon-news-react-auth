import { Link } from "react-router-dom";
import profile from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => console.log('logout dane'))
            .catch(error => console.log(error))
    }

    const ulLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/career'}>Career</Link></li>
        <li><Link to={'/registration'}>Registration</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLinks
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        ulLinks
                    }
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2">
                <img className="w-12" src={user ? user.photoURL : profile} placeholder={profile} alt="" />

                {
                    user ? <button onClick={handleLogout} className="btn bg-black text-white font-semibold">logout</button> :
                        <Link to={'/login'}><button className="btn bg-black text-white font-semibold">login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;