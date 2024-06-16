import React from "react";

import "./Hero.css";

import profile from "/memoji.png";

import Github from "/Hero/githubHero.svg";
import LinkedIn from "/Hero/linkedInHero.svg";
const Hero = () => {
  return (
    <div className="Hero" id="Hero">
      <div className="Hero-Container">
        <div className="greetings-container">
          <h1>
            Hello, I'm <span>Adha</span>
          </h1>
          <p>A computer science student.</p>
          <div className="resumeLink">
            <a className="Resume" href="/eportfolio/Resume.pdf" target="_BLANK">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 -960 960 960"
                width="35px"
                fill="#5f6368"
              >
                <path d="M479.91-329q-6.58 0-12.24-2.17-5.67-2.16-11-7.5L308-487.33q-10-10.18-9.5-23.76.5-13.58 9.91-23.58 10.26-10 24.09-10.16 13.83-.17 23.83 9.83l90.34 91v-322.67q0-14.16 9.61-23.75 9.62-9.58 23.84-9.58 14.21 0 23.71 9.58 9.5 9.59 9.5 23.75V-444l91-91q9.87-10 23.44-9.5 13.56.5 23.82 10.5 9.41 10 9.58 23.67.16 13.66-9.84 23.66l-148 148q-5.33 5.34-11.09 7.5-5.75 2.17-12.33 2.17ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67v-102q0-14.16 9.62-23.75 9.61-9.58 23.83-9.58 14.22 0 23.72 9.58 9.5 9.59 9.5 23.75v102h506.66v-102q0-14.16 9.62-23.75 9.62-9.58 23.83-9.58 14.22 0 23.72 9.58 9.5 9.59 9.5 23.75v102q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z" />
              </svg>
              My Resume
            </a>
            <div className="social-link">
              <a
                href="https://github.com/adhaghani"
                target="_BLANK"
                className="card"
              >
                <img src={Github} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/adhaghani/"
                target="_BLANK"
                className="card"
              >
                <img src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="icon-container">
          <div className="image-container">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
