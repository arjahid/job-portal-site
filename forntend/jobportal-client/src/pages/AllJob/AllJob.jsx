import React from 'react';
import UseJob from '../../hooks/UseJob';
import HotJobsCard from '../Home/HotJobsCard';

const AllJob = () => {
    const {jobs,loading}=UseJob()
    return (
        <div>
            All job here
            <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 '>
                    {jobs.map(job=><HotJobsCard job={job} key={job._id}></HotJobsCard>)}
                </div>
            )}
            </div>
        </div>
    );
};

export default AllJob;