import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {
        title,
        company,
        company_logo,
        requirements,
        description,
        location,
        salaryRange
    } = useLoaderData();

    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <img className="w-16 h-16 mr-4" src={company_logo} alt={`${company} logo`} />
                    <div>
                        <h2 className="text-3xl font-bold text-black">{title}</h2>
                        <p className="text-xl text-black">{company}</p>
                        <p className="flex items-center text-black">
                            <FaMapMarkerAlt className="mr-1" /> {location}
                        </p>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold">Job Description</h3>
                    <p className="text-gray-700">{description}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-blue-700">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        {requirements.map((req, idx) => (
                            <li className='text-black' key={idx}>{req}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-blue-700">
                        Salary Range: <FaDollarSign className="inline-block ml-1" /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
                    </p>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;