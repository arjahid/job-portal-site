import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/img/businesspeople-having-informal-meeting.jpg";
import team2 from "../../assets/img/young-startup-team-celebrating-business-success-while-using-computer-office.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="w-60 lg:w-80 max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-500"
          />
          <motion.img
            animate={{ x: [60, 100, 60] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="w-44 lg:w-80 max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-500"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{
              x: [0, 50, 0],
              color: ["#ff0000", "#0000ff", "#00ff00"],
            }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Job{" "}
            <motion.span
              animate={{
                x: [0, 50, 0],
                color: ["#ff0000", "#0000ff", "#00ff00"],
              }}
              transition={{
                duration: 2,
                delay: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              Latest
            </motion.span>{" "}
            News!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
