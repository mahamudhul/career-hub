import React from 'react';

const AppliedItems = ({ list }) => {
    console.log(list)
    return (
        <div >
            <div className='flex justify-between gap-5 my-5'>
                <img className='flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32' src={list.img} alt="" />
                <div className='flex gap-x-20'>
                    <div >
                        <h1 className='font-bold text-xl mb-3'>{list.job_title}</h1>
                        <p>{list.company_name}</p>
                        <button className='border-solid border-2 text-sky-400 rounded  px-3 py-2 m-2 '>{list.remote_or_onsite}</button>
                        <button  className='border-solid border-2 text-sky-400 rounded  px-3 py-2 m-2 '>{list.fulltime_or_parttime}</button>
                        <div className='flex gap-5 my-3'>
                            <div>
                                <p>{list.location}</p>
                            </div>
                            <div>
                                <p>Salary: {list.salary}</p>
                            </div>
                        </div>

                        <p className='mt-5'>Quentity: {list.quantity}</p>
                    </div>
                    <div>
                        <button className='btn'>View Details</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppliedItems;