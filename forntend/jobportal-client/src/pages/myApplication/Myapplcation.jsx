import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContex/AuthContex';

const Myapplcation = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setJobs(data);
            });
    }, [user.email]);

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-3xl font-bold mb-4 text-center">My Applications: {jobs.length}</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-200 bg-yellow-200 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">Job ID</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-yellow-200 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">Applicant Email</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-yellow-200 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">LinkedIn URL</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-yellow-200 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">GitHub URL</th>
                            <th className="py-2 px-4 border-b border-gray-200 bg-yellow-200 text-left text-sm leading-4 font-medium text-gray-700 uppercase tracking-wider">Resume URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job, idx) => (
                            <tr key={idx}>
                                <td className="py-2 px-4 border-b border-gray-200 text-blue-400">{job.job_id}</td>
                                <td className="py-2 px-4 border-b border-gray-200 text-green-500">{job.applicant_email}</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <a href={job.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {job.linkedin}
                                    </a>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <a href={job.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {job.github}
                                    </a>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <a href={job.resume} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                        {job.resume}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myapplcation;