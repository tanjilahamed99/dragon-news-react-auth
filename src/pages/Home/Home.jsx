import Header from "../../reuseable-com/Header";
import Navbar from "./Header-section/Navbar";
import Marquee from "react-fast-marquee";
import AllCategory from "./All-Category/AllCategory";
import DragonNews from "./dragon-news/DragonNews";
import RightCon from "./Right-container/RightCon";


const Home = () => {

    return (
        <div>
            <Header></Header>
            <div className="flex items-center bg-[#F3F3F3] p-3 my-4 gap-3">
                <button className="btn btn-secondary">Braking news</button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-6  justify-center mt-10">
                <div className="">
                    <AllCategory></AllCategory>
                </div>
                <div className="col-span-2">
                    <DragonNews></DragonNews>
                </div>
                <div className="">
                    <RightCon></RightCon>
                </div>
            </div>
        </div>
    );
};

export default Home;