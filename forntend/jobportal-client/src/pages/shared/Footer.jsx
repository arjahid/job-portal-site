import React from "react";
import logo from "../../../src/logo/icons8-job-application-96.png";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex flex-col sm:flex-row sm:justify-between">
      <aside className="mb-4 sm:mb-0">
        <img src={logo} alt="Job Portal Logo" className="w-16 h-16" />
        <p>
          JOB PORTAL Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav className="mb-4 sm:mb-0">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="mb-4 sm:mb-0">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;