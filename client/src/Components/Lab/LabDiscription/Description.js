import React, { Fragment } from "react";
import './index.css';

const Description = ({ lab }) => {
  return (
    <Fragment>
      <div className="lab__discription">
        <div className="lab__details">
          {lab ? (
            <div className="book__test">
              <h1 id="large__heading">{lab.name}</h1>
              <div className="buttons__">
                <div className="website">website</div>
                <div className="call">call</div>
                <div className="appointment">book appointment</div>
              </div>
              <p id="details"> <b>Address:</b> {lab.address.street_line_one}</p>
              <p id="details"><b>Hours:</b>  open - Closes 8PM</p>
              <p id="details"><b>Phone:</b> {lab.phone} </p>
              <p id="details"><b>Email:</b> {lab.email}</p>
              <div className="test__available">
                <p id="test__heading">Available Tests</p>
                <div className="buttons__">
                  <div  className="test__tags">Blood Test</div>
                  <div className="test__tags">HIV Test</div>
                  <div className="test__tags">Sugar Test</div>
                  <div className="test__tags">Heart Test</div>
                </div>
              </div>
            </div>
          ) : (
            <div>not available</div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Description;
