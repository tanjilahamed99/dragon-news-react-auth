import { useEffect, useState } from "react";
import Header from "../../reuseable-com/Header";
import Navbar from "./Header-section/Navbar";

const Home = () => {

    // const [news, setNews] = useState([])
    // useEffect(() => {
    //     fetch
    // }, [])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 items-center justify-center text-center mt-10">
               <h1 className="col-span-1">All Caterogy</h1>
               <h1 className="col-span-2">Dragon News Home</h1>
               <h1 className="col-span-1">Log in with</h1>
            </div>
        </div>
    );
};

export default Home;