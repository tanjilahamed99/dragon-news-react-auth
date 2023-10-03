import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import leftPng1 from '../../../assets/1.png'
import leftPng2 from '../../../assets/2.png'
import leftPng3 from '../../../assets/3.png'
import { FaCalendarAlt } from "react-icons/fa";

const AllCategory = () => {

    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    return (
        <div className="space-y-5 text-left">
            <h2>All Category</h2>
            {
                category?.map(item => <Link className="block rounded-md p-4 bg-[#E7E7E7]" key={item.id}>{item.name}</Link>)
            }
            <div className="mt-4">
                <div className="my-5">
                    <img className="w-full" src={leftPng1} alt="" />
                    <h1 className="my-4 font-semibold text-xl text-[#403F3F]">
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </h1>

                    <div className="flex items-center gap-5 font-medium">
                        <h2 className="text-[#403F3F]">Spots</h2>
                        <div className="flex items-center gap-3 text-[#9F9F9F]">
                            <FaCalendarAlt></FaCalendarAlt>
                            <h2>Jan 4, 2022</h2>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <img className="w-full" src={leftPng2} alt="" />
                    <h1 className="my-4 font-semibold text-xl text-[#403F3F]">
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </h1>

                    <div className="flex items-center gap-5 font-medium">
                        <h2 className="text-[#403F3F]">Spots</h2>
                        <div className="flex items-center gap-3 text-[#9F9F9F]">
                            <FaCalendarAlt></FaCalendarAlt>
                            <h2>Jan 4, 2022</h2>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <img className="w-full" src={leftPng3} alt="" />
                    <h1 className="my-4 font-semibold text-xl text-[#403F3F]">
                        Bayern Slams Authorities Over Flight Delay to Club World Cup
                    </h1>

                    <div className="flex items-center gap-5 font-medium">
                        <h2 className="text-[#403F3F]">Spots</h2>
                        <div className="flex items-center gap-3 text-[#9F9F9F]">
                            <FaCalendarAlt></FaCalendarAlt>
                            <h2>Jan 4, 2022</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategory;