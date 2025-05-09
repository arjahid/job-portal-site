import React, { useEffect, useState } from 'react';

const UseJob = (sort,search) => {
    const [jobs,setJobs]=useState();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(`https://job-portal-backend-kb8n.onrender.com/jobs?sort=${sort}&search=${search}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
            setLoading(false)
        })
        .catch(error=>console.log(error))
    },[sort ,search])



    return {jobs,loading}
};

export default UseJob;