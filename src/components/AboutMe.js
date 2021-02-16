import React from "react";
import author from "../images/yifeng_avatar.jpg";
import GithubLogo from "../images/GitHub_logo.png";
import LinkedInLogo from "../images/Linkedin_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MyStack from "../components/MyStack";
import Navbar from "./navbar";
const about_me = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-photo" src={author} alt="author..." />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="About-Me-Heading">About Me</h1>
            <p>
              Greetings, I am a Master student majoring in Applied Data Science
              at the University of Southern California. I am a puzzle-solver and
              willing to spend my efforts solving difficult problems that I met
              during work and study. I got interested into web development
              because I love to communicate with others, and I believe the
              content from the web would be a bridge connecting the company and
              their customers. I am currently working as an web developer intern
              at Heirloom Media, Inc, located in Los Angeles. Heirloom is a
              platform which encourages people to write more life stories and
              share with family members and closed friends. I worked with our
              software engineering team on implementing story feed page, user
              onboarding page, including relevant backend routes. The stack I
              used for this project includes React JS for the frontend, Flask
              for the backend, and AWS for the deployment. I was working as a
              Software Engineer Intern at NanTu Technology in Shenzhen, China. I
              was placed in the front- end team. Our team is to do the
              visualization of our web application. Specifically, I am
              responsible for developing a responsive single page dashboard web
              application to preview the data files that our customers love to
              see and develop a functionality for our customers to drag and drop
              the headers of the data file they selected. Also, I developed some
              RESTful services to fetch the data from AWS S3 storage using
              AWS-SDK API. I also submitted spark jobs to analyze our unique
              users who used our company platform
            </p>
            <div className="row align-self-center">
              <div className="col">
                <a
                  target="_blank"
                  href="mailto:coin123fs@gmail.com"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="emailLogo"
                    size="2x"
                    icon={faEnvelope}
                  />
                </a>
              </div>
              <div className="col">
                <a target="_blank" href="https://github.com/carlshi12r44">
                  <img
                    className="GitHubLogo"
                    src={GithubLogo}
                    alt="GitHub Logo"
                  />
                </a>
              </div>
              <div className="col">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yifeng-carl-shi-a20156aa/"
                >
                  <img
                    className="LinkedinLogo"
                    src={LinkedInLogo}
                    alt="Linkedin Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <MyStack />
      </div>
    </>
  );
};

export default about_me;
