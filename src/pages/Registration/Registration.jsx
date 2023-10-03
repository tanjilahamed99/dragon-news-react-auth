import { Link } from "react-router-dom";
import Navbar from "../Home/Header-section/Navbar";

const Registration = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto mt-10">
                <div className="mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Please Registration!</h1>
                    </div>
                    <div className="card mx-auto w-[50%] shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="text" type="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input name="imageUrl" type="text" placeholder="Image url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="gap-2 flex">
                                <input name="email" type="checkbox" className="w-[30px] mt-1" required />
                               <h1>Accept Term & Conditions</h1>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                            <p>Already Have An Account ? <Link to={'/login'} className="font-bold text-[#FF8C47]">login</Link></p>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Registration;