import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
        })
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  '>
                {jobs.map(job=><HotJobsCard job={job} key={job._id}></HotJobsCard>)}
            </div>
        </div>
    );
};

export default HotJobs;