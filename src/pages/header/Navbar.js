import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import ButtonMe from '../shared/ButtonMe';

const Navbar = () => {
    const navigate = useNavigate();
    const btnclik = () => {
        navigate('/login')
    }
    return (
        <nav className='flex gap-5 items-center'>
            <Link to='/'>Home</Link>
            <ButtonMe btn={btnclik}>Login</ButtonMe>
        </nav>
    );
};

export default Navbar;