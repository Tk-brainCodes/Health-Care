import React, { useState, useEffect, Fragment } from 'react'
import './Labs.css'
import axios from 'axios'

const Labs = () => {
  const [labs, setLabs] = useState([]);
  const [search, setSearch] = useState('');

  const apiURI = 'https://demo-api.pneumahealth.co/labs';
  const fetchLabs = async () => {
    const response = await axios.get(apiURI, { headers: { Accept: "application/json" } });
    let userArray = [];
    userArray.push(response.data.data);
    console.log(response.data.data)
    setLabs(userArray[0].toString());
  }
  useEffect(() => {
    fetchLabs();
  }, [apiURI])

  const filterLabs = labs.filter((data) => {
    let labName = data.name.toLowercase().includes(search.toLowercase());
    let labLocation = data.country.toLowercase().includes(search.toLowercase());
    return (
      labName + labLocation
    )
  });

  return (
    <Fragment>
      <div className="find__labs">
        <div className="labs___section1">
          <input
            type="text"
            placeholder="Search for lab or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search__result">
            {filterLabs.map((seen, i) => (
              <div key={i}>
                <h2>{seen.name}</h2>
                <h3>{seen.city}, {seen.state}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="labs__section2">
          {labs.map((lab, i) => (
            <div className="lab__details" key={i}>
              {lab.name}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
export default Labs
