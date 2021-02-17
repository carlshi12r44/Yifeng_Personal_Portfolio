import React from "react";
import Navbar from "./navbar";
const experience = () => {
  return (
    <>
      <Navbar />
      <div className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Experience</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Aug 2020-Now</h3>
              <h4>Heirloom Media Inc, Full Stack Intern</h4>
              <a href="https://heirloom.to/" target="_blank">https://heirloom.to/</a>
              <p>
                <ul class="list-group">
                  <li class="list-group-item border-0">
                    Work on building a responsive web application as an
                    interactive storytelling and sharing platform for senior
                    citizens
                  </li>
                  <li class="list-group-item border-0">
                    Implement UI components for user-growth and
                    user-registration features using React JS and Google Maps
                    API
                  </li>
                  <li class="list-group-item border-0">
                    Implement backend routes for user’s login security and
                    user’s posts feed features using Flask and SQL database
                  </li>
                  <li class="list-group-item border-0">
                    Maintain and test backend routes to improve routes
                    functionality and security using Postman
                  </li>
                  <li class="list-group-item border-0">
                    Incorporate with other developers on discovering and
                    implementing unique user’s pattern in an agile environment
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>May 2019-Aug 2019</h3>
              <h4>NanTu Technology, Software Engineer Intern</h4>
              <a href="https://nantutech.com/en.html" target="_blank">https://nantutech.com/en.html</a>
              <p>
                <ul class="list-group">
                  <li class="list-group-item border-0">
                    Work on building a Software as a service-based and AI-driven
                    data analytics platform for e-commerce and startups
                  </li>
                  <li class="list-group-item border-0">
                    Design and implement a responsive single-page frontend
                    application
                  </li>
                  <li class="list-group-item border-0">Morbi leo risus</li>
                  <li class="list-group-item border-0">
                    Profiled and optimized code to get the best performance for
                    browsers and operating systems
                  </li>
                  <li class="list-group-item border-0">
                    Improve quality and uptime for the company’s front end
                    applications
                  </li>
                  <li class="list-group-item border-0">
                    Incorporate with other developers on discovering and
                    analyzing unique users on the company’s platform
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Aug 2020-Dec 2020</h3>
              <h4>Bike-Sharing Data Analysis Project Member</h4>
              <p>
                <ul class="list-group">
                  <li class="list-group-item border-0">
                    Crawled 290 Mb bikeshare ridership trip data with over 1
                    million rows from open-sourced bikeshare websites
                  </li>
                  <li class="list-group-item border-0">
                    Cleaned the null data rows in the dataset using pandas in
                    Python
                  </li>
                  <li class="list-group-item border-0">
                    Formatted the date format to be standard and easy to parse
                    in the dataset
                  </li>
                  <li class="list-group-item border-0">
                    Scaled 6 continuous columns with zero mean and a standard
                    deviation of one in the model
                  </li>
                  <li class="list-group-item border-0">
                    Compared monthly memberships vs casual trips and visualized
                    them by using matplotlib and pandas
                  </li>
                  <li class="list-group-item border-0">
                    Discovered the popular time periods for the daily in Python
                  </li>
                  <li class="list-group-item border-0">
                    Visualized top 5 popular bikeshare stations every month
                    using folium
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>May 2019-Aug 2019</h3>
              <h4>Smart Suggestion Project Member</h4>
              <p>
                <ul class="list-group">
                  <li class="list-group-item border-0">
                    Extracted data from Wikipedia articles (50Mb) and built a
                    N-Gram model in Java and MapReduce
                  </li>
                  <li class="list-group-item border-0">
                    Built a web application by using JQuery, JavaScript and Ajax
                    to imitate the search suggestion functionality
                  </li>
                  <li class="list-group-item border-0">
                    Built a language model according to the condition
                    probabilities between words and phrases in the library and
                    store the data to MySQL database
                  </li>
                  <li class="list-group-item border-0">
                    Deployed mapper to split the input phrases as keys and
                    output N-Gram of the following phrases
                  </li>
                  <li class="list-group-item border-0">
                    Deployed reducer to collect the mappers’ outputs and sort
                    the top 10 results and wrote them to the database
                  </li>
                  <li class="list-group-item border-0">
                    Ran the MapReduce job with Hadoop under a docker container
                    to generate the auto completion results
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Aug 2019-Jan 2019</h3>
              <h4>Smart Tweet Classification Project Member</h4>
              <p>
                <ul class="list-group">
                  <li class="list-group-item border-0">
                    Trained a model of the classification of online tweets to
                    classify the tweet contents and predict the client mobile OS
                  </li>
                  <li class="list-group-item border-0">
                    Loaded 1090 tweets text and extracted features to create a
                    training set with labels and occurrences of word counts
                  </li>
                  <li class="list-group-item border-0">
                    Tokenized the text to transform the training set into the
                    feature vectors and transformed the occurrences to
                    frequencies and built a pipeline function to combine the
                    tokenizing and transformation functions
                  </li>
                  <li class="list-group-item border-0">
                    Trained the dataset with Random Forest classifier to obtain
                    an accuracy of 79% by using Scikit-Learn in Python
                  </li>
                  <li class="list-group-item border-0">
                    Improved the accuracy to 82% by adjusting the number of
                    estimators, the class weight, and the maximum number of
                    Objective features in the model
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
