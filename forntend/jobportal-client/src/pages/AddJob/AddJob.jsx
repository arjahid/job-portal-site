import React from 'react';

const AddJob = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Add a New Job</h2>
            <form action="#" method="POST" className="bg-green-700 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Project Manager Job Application</h2>

                {/* Job Title */}
                <label htmlFor="title" className="block text-blue-700 text-sm font-bold mb-2">Job Title:</label>
                <input type="text" id="title" name="title" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter job title" />

                {/* Company Name */}
                <label htmlFor="company" className="block text-blue-700 font-bold text-sm font-bold mb-2">Company Name:</label>
                <input type="text" id="company" name="company" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter company name" />

                {/* Company Logo */}
                <label htmlFor="company_logo" className="block text-blue-700 font-bold text-sm font-bold mb-2">Company Logo URL:</label>
                <input type="url" id="company_logo" name="company_logo" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter company logo URL" />

                {/* Location */}
                <label htmlFor="location" className="block text-blue-700 font-bold text-sm font-bold mb-2">Location:</label>
                <input type="text" id="location" name="location" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter location" />

                {/* Job Type */}
                <label htmlFor="jobType" className="block text-gray-700 text-sm font-bold mb-2">Job Type:</label>
                <input type="text" id="jobType" name="jobType" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter job type" />

                {/* Description */}
                <label htmlFor="description" className="block text-blue-700 font-bold text-sm font-bold mb-2">Job Description:</label>
                <textarea id="description" name="description" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter job description"></textarea>

                {/* Requirements */}
                <label htmlFor="requirements" className="block text-blue-700 font-bold text-sm font-bold mb-2">Requirements:</label>
                <textarea id="requirements" name="requirements" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter requirements"></textarea>

                {/* Salary Range */}
                <label htmlFor="salaryRange" className="block text-blue-700 font-bold text-sm font-bold mb-2">Salary Range:</label>
                <input type="text" id="salaryRange" name="salaryRange" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" placeholder="Enter salary range" />

                {/* Application Deadline */}
                <label htmlFor="applicationDeadline" className="block text-blue-700 font-bold text-sm font-bold mb-2">Application Deadline:</label>
                <input type="date" id="applicationDeadline" name="applicationDeadline" className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline mb-4" />

                {/* Submit Button */}
                <input type="submit" value="Add Job" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
            </form>
        </div>
    );
};

export default AddJob;