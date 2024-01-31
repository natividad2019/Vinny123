import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/vinodh.chellapilli">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/natividad2019">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.instagram.com/vinodhchellapilli/?hl=en">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCTq6_zAxCmjYx8xdmuAWZEw">
                <i className="fa fa-youtube-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/vinodh-chellapilli/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'm <span className="highlighted-text">Vinny</span>
              </span>
            </div>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 😎",
                    1000,
                    "Cross Platform Dev 🌐",
                    1000,
                    "React/React Native Dev 📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Proficiency in developing applications, including both front-end
                and back-end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a
              href="/Vinny_Present_Resume.pdf" // Update the file path
              download="Vinny_Present_Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
