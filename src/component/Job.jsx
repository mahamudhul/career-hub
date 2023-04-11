import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {job_title, company_name,remote_or_onsite, fulltime_or_parttime, location, salary, img} = job
    return (
        <div>
            <div className='border-solid border-2 rounded p-10 overflow-hidden'>
                <div>
                    <img src={img} alt="" className=' w-36 h-10 md:h-64 xl:h-80'/>
                </div>
                <h2 >{job.job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className='border-solid border-2 text-sky-400 rounded  px-3 py-2 my-2 '>{remote_or_onsite}</button>
                    <button  className='border-solid border-2 text-sky-400 rounded  px-3 py-2 m-2 '>{fulltime_or_parttime}</button>
                </div>
                <div className='flex gap-3'>
                    <div className='flex'>
                        <p>icon</p>
                        <h2>{location}</h2>
                    </div>
                    <div className='flex'>
                        <p>icon</p>
                        <h2>Salary: {salary} </h2>
                    </div> 
                </div>
                <Link to={`/${job.id}`} className='btn mt-5'>view details</Link>
            </div>
        </div>
    );
};

export default Job;