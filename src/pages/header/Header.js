import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='p-3 bg-white sticky top-0 px-16 flex justify-between'>
            <h1 className='text-3xl cursor-pointer text-center'>Kabirs Inventory</h1>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;