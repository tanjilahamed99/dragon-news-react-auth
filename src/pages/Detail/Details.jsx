import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../reuseable-com/Header";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'


const Details = () => {
    const news = useLoaderData()
    const { detailId } = useParams()
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        const detail = news.find((data) => data._id === detailId)
        setNewsData(detail)
    }, [news, detailId])


    const { title, image_url, details } = newsData

    console.log(title)

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4 mt-5 gap-10">
                <div className="col-span-3 p-5">
                    <h2 className="text-xl font-bold mb-5">Dragon News</h2>
                    <div className="">
                        <div className='w-full my-8'>
                            <img className='w-full' src={image_url} alt="" />
                            <h2 className='font-bold text-xl text-left my-4'>{title}</h2>
                            <p className='text-[#706F6F] font-normal text-sm text-left'>{details}</p>
                            <Link to={'/'}>
                                <button className="btn bg-[#D72050] w-1/2 mb-2 text-white mt-3">
                                    <FaArrowLeft></FaArrowLeft>
                                    All news in this category
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-semibold text-2xl my-4">Editors Insight</h2>
                        <div className="grid grid-cols-3 gap-10">
                            <div>
                                <div className="h-[200px] w-[300px] bg-[#D9D9D9]">
                                </div>
                                <h2 className="font-semibold text-xl my-3"> 21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                                <div className="flex items-center gap-3 text-[#9F9F9F]">
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <h2>Jan 4, 2022</h2>
                                </div>
                            </div>
                            <div>
                                <div className="h-[200px] w-[300px] bg-[#D9D9D9]">
                                </div>
                                <h2 className="font-semibold text-xl my-3"> 21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                                <div className="flex items-center gap-3 text-[#9F9F9F]">
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <h2>Jan 4, 2022</h2>
                                </div>
                            </div>
                            <div>
                                <div className="h-[200px] w-[300px] bg-[#D9D9D9]">
                                </div>
                                <h2 className="font-semibold text-xl my-3"> 21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                                <div className="flex items-center gap-3 text-[#9F9F9F]">
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <h2>Jan 4, 2022</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                            instagram
                        </button>
                    </div>
                    <div className="bg-[#F3F3F3] p-3">
                        <h2 className="font-bold text-xl mb-3 ">Q-zone</h2>
                        <img src={qzone1} alt="" />
                        <img src={qzone2} alt="" />
                        <img src={qzone3} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;