import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between'>
            <div>
                <h1 className='font-bold text-xl'>PREMIER BANK</h1>
            </div>
            <div className='flex gap-3'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/jobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div>
                <button className='bg-sky-500 px-3 py-3 rounded-lg hover:bg-sky-600 text-white'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Header;