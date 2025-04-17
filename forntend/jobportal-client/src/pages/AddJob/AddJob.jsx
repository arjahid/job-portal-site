import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContex/AuthContex';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
    const { user } = useContext(AuthContext);
    const navigate=useNavigate()

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        const { min, max, currency, ...newJob } = initialData;
        newJob.salaryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n');
        newJob.responsibilities = newJob.responsibilities.split('\n');
        console.log(newJob);

        fetch('https://job-portal-backend.onrender.com/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Has been added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/myPostedJobs');
                }
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Post a New Job</h2>
            <form onSubmit={handleAddJob} className="bg-blue-700 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                {/* Job Title */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" required />
                </div>
                {/* Job Location */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Job Location" className="input input-bordered w-full" required />
                </div>
                {/* Job Type */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name="jobType" className="select select-bordered w-full" required>
                        <option disabled selected>Pick a Job type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </div>
                {/* Job Field */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name="jobField" className="select select-bordered w-full" required>
                        <option disabled selected>Pick a Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name="min" placeholder="Min" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name="max" placeholder="Max" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <select name="currency" className="select select-bordered w-full" required>
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="description" placeholder="Job Description" className="textarea textarea-bordered w-full" required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered w-full" required />
                </div>
                {/* Job Requirements */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea name="requirements" placeholder="Put each requirement on a new line" className="textarea textarea-bordered w-full" required></textarea>
                </div>
                {/* Job Responsibilities */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea name="responsibilities" placeholder="Write each responsibility on a new line" className="textarea textarea-bordered w-full" required></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered w-full" required />
                </div>
                {/* HR Email */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" name="hr_email" defaultValue={user?.email} placeholder="HR Email" className="input input-bordered w-full" required />
                </div>
                {/* Application Deadline */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" className="input input-bordered w-full" required />
                </div>
                {/* Company Logo URL */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="url" name="company_logo" placeholder="Company Logo URL" className="input input-bordered w-full" required />
                </div>
                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;