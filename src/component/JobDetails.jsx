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
    console.log(jobData)



    return (
        <div>
            <h1>Blog</h1>
            <h1>{id}</h1>
            {/* <h2>{job.job_description}</h2> */}
            <h2>{jobData.company_name}</h2>
            <h2>{jobData.educational_requirements}</h2>
        </div>
    );
};

export default JobDetails;