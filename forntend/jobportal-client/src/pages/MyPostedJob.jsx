import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContex/AuthContex';
import { useNavigate } from 'react-router-dom';

const MyPostedJob = () => {
    const [jobs, setJobs] = useState([]);
    const { user } = useContext(AuthContext);
   

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                if (user?.email) {
                    const response = await fetch(`https://job-portal-backend-kb8n.onrender.com/jobs?email=${user.email}`);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    const data = await response.json();
                    setJobs(data || []);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, [user?.email]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
                My Posted Jobs: {jobs.length > 0 ? jobs.length : "No jobs posted yet"}
            </h2>
            {jobs.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
                        <thead>
                            <tr className="bg-blue-400 text-white">
                                <th className="border border-blue-300 px-4 py-2">Job Title</th>
                                <th className="border border-gray-300 px-4 py-2">Company</th>
                                <th className="border border-gray-300 px-4 py-2">Location</th>
                                <th className="border border-gray-300 px-4 py-2">Posted Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={index} className="text-center hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 break-words">{job.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 break-words">{job.company}</td>
                                    <td className="border border-gray-300 px-4 py-2 break-words">{job.location}</td>
                                    <td className="border border-gray-300 px-4 py-2 break-words">{job.postedDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">You have not posted any jobs yet.</p>
            )}
        </div>
    );
};

export default MyPostedJob;