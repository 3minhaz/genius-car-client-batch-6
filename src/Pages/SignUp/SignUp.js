import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const handleSignUP = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
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
                    <h1 className="text-center text-5xl font-bold">Sign up!</h1>
                    <form onSubmit={handleSignUP} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type='submit' value='Sign Up'></input>
                        </div>
                    </form>
                    <p className='text-center'>Already Have an account? <Link className='text-orange-600' to='/login'>Please login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;