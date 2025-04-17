import React, { useEffect, useState } from 'react';
import HotJobsCard from './HotJobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        fetch('https://job-portal-backend-kb8n.onrender.com/jobs')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
                setLoading(false); // Set loading to false after data is fetched
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
            {loading ? (
                <p className="text-center text-gray-700">Loading...</p> // Loading message
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                    {jobs.map(job => (
                        <HotJobsCard job={job} key={job._id}></HotJobsCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HotJobs;