import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';
import List from './List';

const Homes = () => {

    const jobsData = useLoaderData()
    // console.log(jobsData);


    const [jobList, setJoblist] = useState([]);
    // console.log(jobList)

    useEffect(() => {
        fetch('jobList.json')
            .then(res => res.json())
            .then(data => setJoblist(data))
    }, [])



    return (
        <div>
            <div>
                <div className='my-container flex flex-col items-center justify-between lg:flex-row  mt-5 mx-5'>
                    <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                        <div>
                            <h1 className='text-5xl font-semibold'>One Step <br /> Closer To Your <br /> <span className='text-teal-400'>Dream Job</span></h1>
                            <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        </div>
                        <button className='btn'>Get Started</button>
                    </div>
                    <div className='relative lg:w-3/4'>
                        <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                            <img className='h-auto' src="https://www.herzing.edu/sites/default/files/2020-09/how-to-become-software-engineer.jpg" alt="" />
                        </div>

                    </div>

                </div>
            </div>




            {/* Job Category Container */}
            <div>
                <div className='flex flex-col items-center'>
                    <p className='text-3xl font-bold my-12'>Job Category List</p>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='my-12'>
                    <div className='flex justify-around'>
                        {
                            jobList.map(jl => <List
                            jl={jl}
                            ></List>)
                        }
                    </div>
                </div>
            </div>


            {/* Featured Job container  */}
            <div>
                <div className='flex flex-col items-center mt-5'>
                    <h1 className='font-bold text-3xl my-5'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='my-container'>
                    <div className='grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-1'>
                        {
                            jobsData.map(job => <Job
                                key={job.id}
                                job={job}
                            ></Job>)
                        }
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Homes;