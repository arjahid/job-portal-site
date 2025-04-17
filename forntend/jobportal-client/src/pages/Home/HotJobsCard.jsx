import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 w-full max-w-xs sm:max-w-sm lg:w-96 mx-auto shadow-sm border rounded-md hover:translate-y-1 transform transition duration-500">
      <div className="flex gap-2 m-2 items-center">
        <figure>
          <img className="w-12 sm:w-14" src={company_logo} alt="Company Logo" />
        </figure>
        <div>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold">{company}</h4>
          <p className="flex items-center gap-1 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-blue-500" /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold text-base sm:text-lg lg:text-xl">
          {title}
          <div className="badge badge-secondary text-xs sm:text-sm">NEW</div>
        </h2>
        <p className="text-sm sm:text-base">{description}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {requirements.map((skill, idx) => (
            <p
              key={idx}
              className="border rounded-md px-2 py-1 text-xs sm:text-sm text-center hover:bg-primary font-bold"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-between items-center mt-4">
          <p className="flex items-center text-sm sm:text-base">
            <span className="font-bold text-blue-500">Salary Range:</span>
            <FaDollarSign className="ml-1" /> {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`jobs/${_id}`}>
            <button className="btn btn-primary btn-sm sm:btn-md">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
