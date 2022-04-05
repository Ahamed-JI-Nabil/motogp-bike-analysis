import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="font-medium mt-6 text-2xl">
            <Link className="ml-4" to='/home'>Home</Link>
            <Link className="ml-4" to='/reviews'>Reviews</Link>
            <Link className="ml-4" to='/dashboard'>Dashboard</Link>
            <Link className="ml-4" to='/blogs'>Blogs</Link>
            <Link className="ml-4" to='/about'>About</Link>
        </div>
    );
};

export default Header;