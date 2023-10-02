import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center mt-10 justify-end gap-[400px]">
            <div className="text-center flex gap-10 justify-center">
                <Link to={'/'} className="font-normal text-[#706F6F] text-lg">Home</Link>
                <Link to={'/about'} className="font-normal text-[#706F6F] text-lg">About</Link>
                <Link to={'/career'} className="font-normal text-[#706F6F] text-lg">Career</Link>
            </div>
            <div className="flex gap-5 items-center">
                <p>avatar</p>
                <button className="btn font-semibold bg-black text-white">login</button>
            </div>
        </div>
    );
};

export default Navbar;