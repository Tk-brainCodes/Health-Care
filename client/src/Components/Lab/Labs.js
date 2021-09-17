import React, { useState, useEffect, Fragment } from 'react'
import './Labs.css'
import axios from 'axios'
import Description from './LabDiscription/Description'

const Labs = () => {
  const [labs, setLabs] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(['']);


  const apiURI = 'https://demo-api.pneumahealth.co/labs';
  const fetchLabs = async () => {
    const response = await axios.get(apiURI, { headers: { Accept: "application/json" } });
    let userArray = [];
    userArray.push(response.data.data);
    console.log(response.data.data)
    setLabs(userArray[0]);
  }
  useEffect(() => {
    fetchLabs();
  }, [apiURI])

  const filterLabs = () => {
    labs.filter(data => {
      let labName = data.name.includes(search);
      let labLocation = data.country.includes(search);
      return (
        labName + labLocation
      )
    })
  }

  const displayLabs = () => {
    setSelected(labs.map((theLabs) => theLabs.id));
    console.log(selected, "this is selected");
  }
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
            {labs.map((seen) => (
              <button key={seen.id} onClick={displayLabs}>
                <h2>{seen.name}</h2>
                <h3>{seen.city}, {seen.state}</h3>
              </button>
            ))}
          </div>
        </div>
        <div className="labs__section2">
        </div>
      </div>
    </Fragment>
  )
}
export default Labs
