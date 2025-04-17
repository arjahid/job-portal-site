import React, { useEffect, useState } from 'react';

const UseJob = (sort) => {
    const [jobs,setJobs]=useState();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(`https://job-portal-backend.onrender.com/jobs?sort=${sort}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
            setLoading(false)
        })
        .catch(error=>console.log(error))
    },[sort ])



    return {jobs,loading}
};

export default UseJob;