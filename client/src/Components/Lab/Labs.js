import React, { useState, useEffect, Fragment } from "react";
import "./Labs.css";
import axios from "axios";
import Description from "./LabDiscription/Description";
// import Search from '../../assets/searchicon.svg'
// import Cancel from '../../assets/x.svg';
import ExternalLink from '../../assets/external-link.svg';
import Navigation from '../../assets/navigation.svg';


const Labs = () => {
  const [labs, setLabs] = useState([]);
  // const [search, setSearch] = useState("");
  const [selected, setSelected] = useState();

  const apiURI = "https://demo-api.pneumahealth.co/labs";
  const fetchLabs = async () => {
    try {
      const { data } = await axios.get(apiURI, {
        headers: { Accept: "application/json", Authorization: 'Bearer 5fvdi1w3tl352i4nmejn' }
      });
      setLabs(data.data);
      console.log(data.data)
    } catch (err) { }
  };
  useEffect(() => {
    fetchLabs();
  }, [apiURI]);

  // const filterLabs = () => {
  //   labs.filter((data) => {
  //     let labName = data.name.includes(search);
  //     let labLocation = data.country.includes(search);
  //     return labName + labLocation;
  //   });
  // };

  const displayLabs = (selectedLab) => {
    setSelected(selectedLab);
    console.log(selectedLab, "this is selected");
  };
  return (
    <Fragment>
      <div className="find__labs">
        <div className="labs___section1">
          {/*
          <div className="search__box">
            <div className="search__form">
              <input
                type="text"
                placeholder="Search for lab or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="search"
              />
              <button type="submit" id="search__btn">
                <img src={Search} alt="searchIcon" />
              </button>
              <div className="cancel__icon">
                <img src={Cancel} alt="Cancelicon" />
              </div>
            </div>
          </div>
          */}
          <h2 id="labs__now">Avaliable Laboratories</h2>
          <div className="search__result">
            <div className="map__result">
              {labs.map((lab) => (
                <div className="search__click" key={lab.id} onClick={() => displayLabs(lab)}>
                  <div className="lab__name">
                    <h2>{lab.name}</h2>
                    <p>
                      {lab.address.city}, {lab.address.state}
                    </p>
                  </div>
                  <div className="links__">
                    <img src={ExternalLink} alt="Link" />
                    <img src={Navigation} alt="navigation" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="labs__section2">
          <Description lab={selected} />
        </div>
      </div>
    </Fragment>
  );
};
export default Labs;
