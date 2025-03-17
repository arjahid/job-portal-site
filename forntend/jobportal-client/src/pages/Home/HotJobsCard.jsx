import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const HotJobsCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-2 m-2">
        <figure>
          <img className="w-14" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl">{company}</h4>
          <p className="flex items-center gap-1">
            <FaMapMarkerAlt></FaMapMarkerAlt> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill,idx) => (
            <p
            key={idx}
              className="
            border rounded-md px-2 text-center hover:bg-primary font-bold"
            >
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end items-center mt-4">
            <p className="flex items-center">Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
