import React from "react";
import HeirloomMainPage from "../images/portfolio_images/heirloom_main_page.PNG";
import NantuTechMainPage from "../images/portfolio_images/nantu_tech_main_page.PNG";
import Navbar from "./navbar";
const portfolio = () => {
  return (
    <>
      <Navbar />
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py">portfolio</h1>

          <div className="card mb-3">
            <a target="_blank" href="https://heirloom.to/">
              <img
                src={HeirloomMainPage}
                alt="Heirloom Main Page"
                className="card-img-to"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Heirloom Media Page</h5>
              <p class="card-text">
                The Heirloom platform aims to encourage people to write and save
                worth-telling life stories. We hopes to gather family together
                and closer.
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <a target="_blank" href="https://nantutech.com/en.html">
              <img
                className="card-img-to"
                src={NantuTechMainPage}
                alt="Nantu Tech Main Page"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Nantu Technology Main Page</h5>
              <p class="card-text">
                The Nantu Technology platform aims to provide small-business
                owners or managers ML-infused services to accelerate their
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default portfolio;
