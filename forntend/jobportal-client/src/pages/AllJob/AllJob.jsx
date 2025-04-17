import React, { useState } from 'react';
import UseJob from '../../hooks/UseJob';
import HotJobsCard from '../Home/HotJobsCard';

const AllJob = () => {
    const [sort,setSort]=useState(false)
    const [search,setSearch]=useState("");
    console.log(sort);
    const {jobs,loading}=UseJob(sort,search)
    return (
        <div>
            All job here
            <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center'>
            <button onClick={()=>setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"}`}>{sort == true? "sorted by slary":"sort by salary"}</button></div>
            <input 
            onKeyUp={(e)=>setSearch(e.target.value)}
                type="text"  
                placeholder="Search job by location" 
                className="input input-bordered w-full max-w-md mx-auto my-4"
            />
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