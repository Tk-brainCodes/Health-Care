import React, { Fragment } from "react";

const Description = ({ lab }) => {
  return (
    <Fragment>
      <div className="lab__discription">
        <div className="lab__details">
          {lab ? (
            <div>
              Name: {lab.name} <br />
              Rating: {lab.rating} <br />
              Email: {lab.email}
              <br />
              Address: {lab.address.street_line_one}
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
