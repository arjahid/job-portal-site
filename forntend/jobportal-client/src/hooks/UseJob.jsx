import React, { useEffect, useState } from 'react';

const UseJob = () => {
    const [jobs,setJobs]=useState();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
            setLoading(false)
        })
        .catch(error=>console.log(error))
    },[])



    return {jobs,loading}
};

export default UseJob;