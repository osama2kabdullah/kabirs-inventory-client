import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='p-3 text-center border'>
            Copyright &copy; free by <a className='text-sky-500 hover:underline' target="_blank" rel="noreferrer" href="https://github.com/osama2kabdullah">Osama Abdullah</a>
        </div>
    );
};

export default Footer;