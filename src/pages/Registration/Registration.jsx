import { Link } from "react-router-dom";
import Navbar from "../Home/Header-section/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebaseConfig";


const Registration = () => {
    const { createUsers } = useContext(AuthContext)




    const handleCreateUser = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.imageUrl.value
        const email = e.target.gmail.value
        const password = e.target.password.value

        createUsers(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                })
                    .then(() => console.log('profile update dane'))
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="container mx-auto mt-10">
                <div className="mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Please Registration!</h1>
                    </div>
                    <div className="card mx-auto w-[50%] shadow-2xl bg-base-100">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="your name" className="input input-bordered" required />
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
                                <input type="email" name="gmail" className="input input-bordered" />
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