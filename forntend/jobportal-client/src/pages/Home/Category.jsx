import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const JobCard = ({ title, company, location, type, posted }) => {
    return (
        <div className="card w-full max-w-xs bg-base-100 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <div className="card-body p-4">
                <h2 className="card-title text-sm flex items-center">
                    <FaBriefcase className="mr-2 text-blue-600" /> {title}
                </h2>
                <p className="text-xs text-gray-600">{company}</p>
                <div className="mt-2 flex items-center text-gray-600 text-xs">
                    <FaMapMarkerAlt className="mr-2" /> {location}
                </div>
                <div className="mt-2 flex items-center text-gray-600 text-xs">
                    <FaClock className="mr-2" /> {type} | Posted: {posted}
                </div>
                <div className="card-actions justify-end mt-2">
                    <button className="btn btn-primary btn-xs">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

const JobPortal = () => {
    const jobs = [
        {
            title: 'Frontend Developer',
            company: 'Tech Solutions Ltd.',
            location: 'Dhaka, Bangladesh',
            type: 'Full-Time',
            posted: '2 days ago',
        },
        {
            title: 'Backend Engineer',
            company: 'CodeCraft Inc.',
            location: 'Chittagong, Bangladesh',
            type: 'Part-Time',
            posted: '1 week ago',
        },
        {
            title: 'UI/UX Designer',
            company: 'Creative Hub',
            location: 'Sylhet, Bangladesh',
            type: 'Freelance',
            posted: '3 days ago',
        },
        {
            title: 'DevOps Engineer',
            company: 'Cloud Nexus',
            location: 'Barisal, Bangladesh',
            type: 'Remote',
            posted: '5 days ago',
        },
        {
            title: 'Data Scientist',
            company: 'AI Pioneers',
            location: 'Dhaka, Bangladesh',
            type: 'Full-Time',
            posted: '1 week ago',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {jobs.map((job, index) => (
                <JobCard
                    key={index}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    type={job.type}
                    posted={job.posted}
                />
            ))}
        </div>
    );
};

export default JobPortal;
