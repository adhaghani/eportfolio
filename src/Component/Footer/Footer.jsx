import React from "react";

import "./Footer.css";

import github from "/Footer/github.svg";
import linkedin from "/Footer/link.svg";
import instagram from "/Footer/instagram.svg";
import hackerrank from "/Footer/HackerRank.svg";

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-Container">
        <div className="section-group">
          <div className="section Socials">
            <h3 className="Title">Follow me</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/adhaghani" target="_BLANK">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/adhaghani" target="_BLANK">
                  <img src={github} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/adhaghani/"
                  target="_BLANK"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/profile/Adhaghani"
                  target="_BLANK"
                >
                  <img src={hackerrank} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-group">
          <div className="section">
            <p className="Title">Copyright &copy; 2024 Adhaghani</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
