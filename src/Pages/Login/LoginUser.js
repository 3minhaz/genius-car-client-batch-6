import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LoginUser = () => {
    const { login } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero my-10">
            <div className="hero-content grid md:grid-cols-2 gap-6 flex-col lg:flex-row my-10">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt=''></img>
                </div>
                <div className="card w-full max-w-md shadow-2xl bg-base-100  py-10">
                    <h1 className="text-center text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value='login'></input>
                        </div>
                    </form>
                    <p className='text-center'>New to Genius car? <Link className='text-orange-600' to='/signup'>Please sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginUser;