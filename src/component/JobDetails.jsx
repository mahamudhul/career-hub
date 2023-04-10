import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();

    const jobDetails = useLoaderData();
    // console.log(jobDetails)

    // const { job, setJob } = useState([])

    // useEffect(() => {
    //     // if (jobDetails) {
    //     //     const jobData = jobDetails.find((blog) => blog.id === id);
    //     //     setJob(jobData)
    //     // }
    //     const jobData = jobDetails.find( blog => blog.id === id );
    //     console.log(jobData)
    //     setJob(jobData)
    // }, [])
    const jobData = jobDetails.find(blog => blog.id === id);
    // console.log(jobData)

    const { job_description, job_responsibility, educational_requirements, experiences, location, contact_information, job_title, salary } = jobData



    return (
        <div>
            <div className='my-container grid lg:grid-cols-3 sm:grid-cols-1 gap-4 my-12 '>
                <div className='col-span-2'>
                    <p className='my-3'> <span className='font-bold'>Job Description: </span>   {job_description}</p>
                    <p> <span className='font-bold'> Job Responsibility:</span>{job_responsibility}</p>
                    <p className='my-5'> <span className='font-bold'>Educational Requirements: </span>   {educational_requirements}</p>
                    <p> <span className='font-bold'>Experiences:</span>  {experiences}</p>
                </div>
                <div>
                    <div  className='bg-purple-200 rounded-lg p-5'>
                        <p className='my-3'> <span className='font-bold text-xl'>Job Details:</span> </p>
                        <div>
                            <p>Salary : {salary}</p>
                            <p>Job Title : {job_title}</p>
                        </div>
                        <div className='my-3'>
                            <p className=''><span className='font-bold text-xl'>Contact Information :</span> </p>
                            <p>Phone : {contact_information.phone}</p>
                            <p>Email : {contact_information.email}</p>
                            <p>Address : {location}</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn'>Apply Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;