import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const RightCon = () => {
    return (
        <div>
            <div>
                <h2 className="mb-3 font-bold text-xl">Login with</h2>
                <button className="btn btn-outline w-full mb-2 text-teal-400">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Github
                </button>
            </div>
            <div className="my-8">
                <h2 className="mb-4 font-bold text-xl">Find Us On</h2>
                <button className="btn bg-base-100 border-2 w-full border-gray-300 p-4">
                    <FaFacebookF></FaFacebookF>
                    Facebook
                </button>
                <button className="border-x-2 bg-base-100 btn w-full border-gray-300 p-4">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
                <button className="border-2 bg-base-100 btn w-full border-gray-300 p-4">
                    <FaInstagram></FaInstagram>
                    instragram
                </button>
            </div>
            <div className="bg-[#F3F3F3] p-3">
                <h2 className="font-bold text-xl mb-3 ">Q-zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            <div className="text-white  pt-32 px-10 text-center mt-5 bg-[url('https://i.ibb.co/S0yfjR0/bg1.png')]  bg-cover bg-no-repeat h-[500px]">
                <h2 className="font-bold text-xl"> Create an Amazing Newspaper</h2>
                <p className="my-7 font-medium ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn bg-[#D72050] text-white border-none">Learn more</button>
            </div>
        </div>
    );
};

export default RightCon;