import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://job-portal-backend-kb8n.onrender.com/jobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
            });
    }, []);
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-blue-400">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Hot Jobs</h2>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                    Explore the latest job opportunities tailored for you.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {jobs.map(job => (
                    <HotJobsCard job={job} key={job._id}></HotJobsCard>
                ))}
            </div>
        </div>
    );
};

export default HotJobs;