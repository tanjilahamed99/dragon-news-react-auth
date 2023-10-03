import { Link } from "react-router-dom";
import Navbar from "../Home/Header-section/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const { login } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.gmail.value
        const password = e.target.password.value

        login(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto mt-32">
                <div className="mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold my-5">Please Login now!</h1>
                    </div>
                    <div className="card mx-auto w-[50%] shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="gmail" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Dont’t Have An Account ? <Link to={'/registration'} className="font-bold text-[#FF8C47]">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;