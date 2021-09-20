import React, { Fragment } from "react";
import Search from "../../assets/search.svg";
import File from "../../assets/file.svg";
import Setting from "../../assets/settings.svg";
import Light from "../../assets/light.svg";
import House from "../../assets/House.svg";
import Files from "../../assets/Files.svg";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <Fragment>
      <div className="cards">
        <div className="component1">
          <Link to="/labs">
            <div className="card__one">
              <div className="image-container">
                <img src={Search} alt="searchImage" height="150px" />
              </div>
              <div className="text-heading">
                Find a <br /> nearby lab
              </div>
              <div className="text-paragraph">
                Book an appointment with <br /> accredited and licensed <br />
                medical laboratories.
              </div>
            </div>
          </Link>
        </div>
        <div className="component2">
          <Link to="/onboarding">
            <div className="card__two">
              <div className="text-heading two">
                Complete <br /> Onboarding
              </div>
              <div className="text-paragraph"> 1 form</div>
              <div className="image-container image2">
                <img src={File} alt="fileImage" height="150px" />
              </div>
            </div>
            <div className="sub__card">
              <img
                src={Setting}
                alt="settingImage"
                width="40px"
                height="40px"
              />
              <div className="text-heading three">
                Settings/
                <br />
                Profile
              </div>
            </div>
          </Link>
        </div>
        <div className="component3">
          <div className="information__card">
            <div className="card__three">
              <div className="column1">
                <div className="text-heading four">
                  Tips and informations <br />
                  <div className="text-paragraph">
                    Learn about lab tests, what they are meant for
                    <br /> and how to use VItalis
                  </div>
                </div>
              </div>
              <div className="column2">
                <img src={Light} alt="lightImage" width="97px" height="147px" />
              </div>
            </div>
            <div className="services">
              <div className="service1">
                <div className="image-container">
                  <img
                    src={House}
                    alt="houseImage"
                    height="80px"
                    width="80px"
                  />
                </div>
                <br />
                <div className="text-heading green">
                  Home <br /> Services
                </div>
                <div className="text-paragraph">
                  We will bring the clinic to <br /> you and take your samples.
                </div>
                <button className="cta-btn">coming soon</button>
              </div>
              <div className="service2">
                <div className="image-container">
                  <img src={Files} alt="fileImage" height="80px" width="80px" />
                </div>
                <br />
                <div className="text-heading green">
                  Instituition <br /> Service
                </div>
                <div className="text-paragraph">
                  Setup and have record of <br /> lab tests for your employees.
                </div>
                <button className="cta-btn">coming soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
