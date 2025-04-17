import Lottie from "lottie-react";
import React, { useContext } from "react";
import loginnAnimation from "../../assets/lottiefy/login.json";
import AuthContext from "../../context/AuthContex/AuthContex";
import SocialLogin from "./SocialLogin";
import axios from 'axios';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signin = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("signin", location);
  const from = location.state || "/";
  console.log("form", from);

  const hanldeSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);

        if (res.user) {
          alert("User logged in successfully");
          const user=res.user.email;
          axios.post('http://localhost:5173/jwt',user,{
            withCredentials: true,
          })
          .then(res =>{
            console.log('oy kire',res.data);
          })
          // navigate(from);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid credentials");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <Lottie animationData={loginnAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full lg:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4">Login now!</h1>
          <div className="card-body">
            <form onSubmit={hanldeSignin} className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>
              New?
              <Link to="/register" className="text-green-600">
                Register
              </Link>
            </p>
            <div className="divider">OR</div>
            <div className="flex justify-center">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
