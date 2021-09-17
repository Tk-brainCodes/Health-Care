import React, { useState, useEffect, Fragment } from "react";
import "./Labs.css";
import axios from "axios";
import Description from "./LabDiscription/Description";

const Labs = () => {
  const [labs, setLabs] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState();

  const apiURI = "https://demo-api.pneumahealth.co/labs";
  const fetchLabs = async () => {
    try {
      const { data } = await axios.get(apiURI, {
        headers: { Accept: "application/json" },
      });
      setLabs(data.data);
    } catch (err) { }
  };
  useEffect(() => {
    fetchLabs();
  }, [apiURI]);

  const filterLabs = () => {
    labs.filter((data) => {
      let labName = data.name.includes(search);
      let labLocation = data.country.includes(search);
      return labName + labLocation;
    });
  };

  const displayLabs = (selectedLab) => {
    setSelected(selectedLab);
    console.log(selectedLab, "this is selected");
  };
  return (
    <Fragment>
      <div className="find__labs">
        <div className="labs___section1">
          <div className="search__box">
            <div className="search__form">
              <input
                type="text"
                placeholder="Search for lab or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="cancel__icon"></div>
          </div>
          <div className="search__result">
            {labs.map((lab) => (
              <button key={lab.id} onClick={() => displayLabs(lab)}>
                <h2>{lab.name}</h2>
                <h3>
                  {lab.city}, {lab.state}
                </h3>
              </button>
            ))}
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
