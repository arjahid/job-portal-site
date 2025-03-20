import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContex/AuthContex";
import Swal from 'sweetalert2'

const JobApply = () => {
    const navigate=useNavigate()
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const application = { linkedin, github, resume };
    const jobApplicant = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
    };
    console.log(application);
    // Handle form submission logic here
    fetch('http://localhost:3000/job-application',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(jobApplicant)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Application submitted successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
                navigate('/myapplication')
        }
    })
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Apply for Job</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="linkedin"
          >
            LinkedIn URL
          </label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-green-600 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://www.linkedin.com/in/your-profile"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="github"
          >
            GitHub URL
          </label>
          <input
            type="url"
            name="github"
            id="github"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-green-600 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://github.com/your-profile"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="resume"
          >
            Resume URL
          </label>
          <input
            type="url"
            name="resume"
            id="resume"
            className="shadow appearance-none border rounded w-full py-3 px-4 text-green-600 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="https://your-resume-link.com"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
