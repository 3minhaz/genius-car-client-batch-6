import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    const menuItems =
        <>
            <span className='m-3'><Link className='font-semibold' to='/'>Home</Link></span>

            {
                user?.email ?
                    <span><Link className='font-semibold' to='/orders'>Orders</Link></span>
                    :
                    <span><Link className='font-semibold' to='/login'>Login</Link></span>
            }

        </>;

    return (
        <div className="navbar h-20 mb-12 pt-12  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="flex menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt=''></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="p-2">
                    {
                        menuItems
                    }
                </ul>

            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;