import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';


const Statistics = () => {
    const [jobList, setJoblist] = useState([]);

    
    useEffect(() => {
        fetch('jobList.json')
            .then(res => res.json())
            .then(data => setJoblist(data))
    }, [])

    return (
        <div>
            <div>

            </div>
            <div className='my-container'>
                
            </div>
        </div>
    );
};

export default Statistics;