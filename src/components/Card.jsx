import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Card = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <section className='bg-blue-50 h-screen w-full'>
                <div className="mx-auto max-w-7xl">
                    <div className='flex text-center items-center justify-between h-16 py-16'>
                        <div className='flex justify-center items-center'>
                            <div className='me-auto h-10 w-12 border border-gray-700 rounded-full text-white bg-gradient-to-r to-yellow-500 from-slate-100 flex justify-center items-center'>
                                <span className='text-black font-bold text-2xl'>A</span>
                            </div>
                            <h1 className='font-bold text-2xl ms-4 hidden md:block'>Adam Cooper Team</h1>
                        </div>
                        <div className='p-2'>
                            <button className="btn bg-slate-900 text-white rounded h-12 w-36" onClick={() => setIsModalOpen(true)}>New Project</button>
                            {isModalOpen &&
                                <dialog className={`modal ${isModalOpen ? 'w-full md:w-2/6' : 'hidden'} bg-white shadow-lg rounded-xl`} open>
                                    <div className="modal-box">
                                        <div className="modal-action p-5">
                                            <form method="dialog">
                                                <div className='flex justify-between'>
                                                    <span className='text-2xl font-bold'>New Dashboard</span>
                                                    <button className="btn" onClick={() => setIsModalOpen(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
                                                </div>
                                                <div className='my-8'>
                                                    <span className='text-left font-bold flex justify-start pl-10'>Storyboard Name</span>
                                                    <input
                                                        type="text"
                                                        className='w-full md:w-[400px] h-[45px] border mt-2 border-gray-200 form-control p-2 rounded'
                                                        placeholder='e.g. Default Project Storyboard'
                                                        value={inputValue}
                                                        onChange={handleChange}
                                                    />
                                                    <span className='text-left font-bold flex justify-start pl-10 mt-3'>Frame Size</span>
                                                    <select name="" id="" className='w-full md:w-[400px] h-[45px] p-2 font-medium rounded border border-gray-200'>
                                                        <option value="" className='p-2'>Landscape (16.9)</option>
                                                        <option value="">Portrait</option>
                                                    </select>
                                                    <hr className='mt-10' />
                                                    <div className='flex justify-between items-center my-5 p-3'>
                                                        <div>
                                                            <input
                                                                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="flexSwitchCheckDefault"
                                                                checked={isChecked}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            <label
                                                                className="inline-block pl-[0.15rem] hover:cursor-pointer font-bold"
                                                                htmlFor="flexSwitchCheckDefault"
                                                            >
                                                                AI Assistant
                                                            </label>
                                                        </div>
                                                        <div>
                                                            <button
                                                                className={`btn  text-white h-10 w-44 rounded ${!inputValue.trim() ? 'bg-slate-500 text-white' : 'bg-slate-800'}`}
                                                                type='button'
                                                                disabled={!inputValue.trim()}
                                                            >
                                                                Create dashboard
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            }
                        </div>
                    </div>
                    <div className='h-auto max-w-screen bg-white rounded-xl'>
                        <div className='flex text-center p-12 justify-between'>
                            <div className='h-5 max-w-screen text-black'>
                                <span className='text-xl font-bold'><i className="fa-regular fa-folder"></i></span>
                                <span className='text-xl font-bold ml-2'>Default Project</span><br />
                                <span className='text-slate-400'>1 Storyboard</span>
                            </div>
                            <div className='h-5'>
                                <span><i className='fa fa-ellipsis-v'></i>&nbsp;&nbsp;&nbsp;&nbsp; </span>
                                <span><i className='fa fa-angle-down'></i> </span>
                            </div>
                        </div>
                        <div className='p-5'>
                            <div className='h-auto w-22 bg-white p-1'>
                                <div className='grid grid-cols-6 md:grid-cols-12 ms-auto'>
                                    <div className="max-w-4xl me-2 col-span-6 md:col-span-4 lg:col-span-4 bg-white border border-gray-50 rounded-lg shadow dark:bg-white white:border-gray-700">
                                       <a href='#' >
                                            <img className="rounded-t-lg h-40 w-full" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712016000&semt=sph" alt="" />
                                        </a>
                                        <div className="p-5">
                                           <a href='#' >
                                                <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">AI Character Demo Storyboard</h6>
                                            </a>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Updated 19 mar 2023</p>
                                        </div>
                                    </div>
                                    <div className="w-80  sm:w-96 h-72 my-2 lg:mx-2 sm:mx-0 bg-white border border-gray-100 rounded-lg shadow dark:bg-blue-50 white:border-gray-700 flex justify-center items-center">
                                        <div className='h-14 w-14 bg-blue-50 border border-gray-300 rounded-full flex justify-center items-center'>
                                        <span className='text-gray-300' onClick={() => setIsModalOpen1(true)} ><i className="fa fa-plus "></i></span>
                                            {/* <button className="btn bg-slate-900 text-white rounded h-12 w-36" onClick={() => setIsModalOpen1(true)}></button> */}
                                            {isModalOpen1 &&
                                                <dialog className={`modal ${isModalOpen1 ? 'w-full md:w-2/6' : 'hidden'} bg-white shadow-lg rounded-xl`} open>
                                                    <div className="modal-box">
                                                        <div className="modal-action p-5">
                                                            <form method="dialog">
                                                                <div className='flex justify-between'>
                                                                    <span className='text-2xl font-bold'>New Dashboard</span>
                                                                    <button className="btn" onClick={() => setIsModalOpen1(false)}><i className="fa fa-times" aria-hidden="true"></i></button>
                                                                </div>
                                                                <div className='my-8'>
                                                                    <span className='text-left font-bold flex justify-start pl-10'>Storyboard Name</span>
                                                                    <input
                                                                        type="text"
                                                                        className='w-full md:w-[400px] h-[45px] border mt-2 border-gray-200 form-control p-2 rounded'
                                                                        placeholder='e.g. Default Project Storyboard'
                                                                        value={inputValue}
                                                                        onChange={handleChange}
                                                                    />
                                                                    <span className='text-left font-bold flex justify-start pl-10 mt-3'>Frame Size</span>
                                                                    <select name="" id="" className='w-full md:w-[400px] h-[45px] p-2 font-medium rounded border border-gray-200'>
                                                                        <option value="" className='p-2'>Landscape (16.9)</option>
                                                                        <option value="">Portrait</option>
                                                                    </select>
                                                                    <hr className='mt-10' />
                                                                    <div className='flex justify-between items-center my-5 p-3'>
                                                                        <div>
                                                                            <input
                                                                                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                                                                                type="checkbox"
                                                                                role="switch"
                                                                                id="flexSwitchCheckDefault"
                                                                                checked={isChecked}
                                                                                onChange={handleCheckboxChange}
                                                                            />
                                                                            <label
                                                                                className="inline-block pl-[0.15rem] hover:cursor-pointer font-bold"
                                                                                htmlFor="flexSwitchCheckDefault"
                                                                            >
                                                                                AI Assistant
                                                                            </label>
                                                                        </div>
                                                                        <div>
                                                                            <button
                                                                                className={`btn  text-white h-10 w-44 rounded ${!inputValue.trim() ? 'bg-slate-500 text-white' : 'bg-slate-800'}`}
                                                                                type='button'
                                                                                disabled={!inputValue.trim()}
                                                                            >
                                                                                Create dashboard
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card;
