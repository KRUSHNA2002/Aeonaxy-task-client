import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Mynavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu1 = () => {
        setIsOpen1(!isOpen1);
    };

    return (
        <nav className="bg-white p-2">
            <div className="mx-auto max-w-7xl  ">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen1 ? 'true' : 'false'}
                            onClick={toggleMenu1}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>

                            <svg
                                className={isOpen1 ? 'hidden h-6 w-6' : 'block h-6 w-6'}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg
                                className={isOpen1 ? 'block h-6 w-6' : 'hidden h-6 w-6'}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:flex  items-center">
                            <img
                                className="h-8 w-auto rounded-full "
                                src="https://static.vecteezy.com/system/resources/previews/007/697/285/original/black-and-white-b-modern-b-logo-capital-b-logo-free-vector.jpg"
                                alt="Your Company"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <a href="#" className=" text-black text-2xl rounded-md px-3 py-2 font-bold" aria-current="page">
                                    Project Dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full sm:w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search My Storyboards"
                                required
                            />
                        </div>
                        <div className='ms-5 hidden md:block '>
                            <button className='btn bg-blue-100 h-12 w-44 rounded-xl  '>
                                <span className='font-bold'>Quick Start</span>
                            </button>
                        </div>
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded={isOpen ? 'true' : 'false'}
                                    onClick={toggleMenu}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <div className='h-12 w-12 rounded-full text-white bg-gradient-to-r to-yellow-500 from-slate-100  flex justify-center items-center '>
                                        <span className='text-black font-bold  text-2xl ' > A </span>
                                    </div>
                                </button>
                            </div>

                            {isOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex="-1"
                                >
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                                        Your Profile
                                    </a>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={isOpen1 ? 'block sm:hidden' : 'hidden'} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                        Dashboard
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Team
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Projects
                    </a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                        Calendar
                    </a> */}
                </div>
            </div>
        </nav>
    );
};

export default Mynavbar;
