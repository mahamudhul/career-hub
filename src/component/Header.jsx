import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'


const Header = () => {
    const [menu, setMenu] = useState(false)


    return (
        <div >
            <nav className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>PREMIER BANK</h1>
                </div>
                <div className='lg:flex gap-5 hidden'>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'default')} >Home</NavLink>
                    <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                    <NavLink to='/jobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                </div>
                <div>
                    <button className='btn'>Star Applying</button>

                </div>
            </nav>
            <div className='lg:hidden'>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setMenu(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
                {menu && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <h1 className='font-bold text-xl'>PREMIER BANK</h1>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setMenu(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/' className='default'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/statistics'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/jobs'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Applied Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/blog'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <button className='btn'>Star Applying</button>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default Header;