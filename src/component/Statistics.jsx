import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const [jobList, setJoblist] = useState([]);

    const jobsData = useLoaderData()
    console.log(jobsData);

    useEffect( () => {
        fetch('jobList.json')
        .then(res => res.json())
        .then(data => setJoblist(data))
    },[])

    return (
        <div>
            <h1>helloooo this is jonb list item: {jobList.length}</h1>
            <h1>here iss all jobs : {jobsData.length}</h1>
        </div>
    );
};

export default Statistics;