import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilites/fakeDB';
import { useLoaderData } from 'react-router-dom';
import AppliedItems from './AppliedItems';
import List from './List';

const AppliedJobs = () => {
    const [job, setJob] = useState([])
    const jData = useLoaderData()
    // console.log(jData)

    useEffect(() => {
        const jobsList = getStoredCart()
        let newJob = []

        // console.log(jobsList)
        for (const id in jobsList) {
            const foundJob = jData.find(product => product.id === id)
            if (foundJob) {
                const quantity = jobsList[id]
                foundJob.quantity = quantity
                newJob.push(foundJob)
            }
        }
        setJob(newJob)
    }, [])
    console.log(job)



    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
                <h2 className='text-xl font-semibold'>{job.length ? 'Review Items' : 'List is EMPTY!'}</h2>
                <ul  className='flex flex-col divide-y divide-gray-700'>
                    {
                        job.map(list=> <AppliedItems
                        key={list.id}
                        list={list}
                        ></AppliedItems>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default AppliedJobs;