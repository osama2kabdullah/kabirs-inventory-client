import React from 'react';
import Bannar from './Bannar';
import InstockProducts from './InstockProducts/InstockProducts';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <InstockProducts></InstockProducts>
        </div>
    );
};

export default Home;