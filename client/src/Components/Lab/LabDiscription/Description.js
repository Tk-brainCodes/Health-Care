import React, { Fragment, useEffect } from 'react'

const Description = ({ labs, selected }) => {
    useEffect(() => {
        console.log(selected, "this has been seen")
    })
    return (
        <Fragment>
            <div className="lab__discription">
                {labs.map((lab) => (
                    <div className="lab__details" key={lab.id}>
                        {selected ? (
                            <div>
                                Name:  {lab.name} <br />
                                Rating:  {lab.rating} <br />
                                Email: {lab.email}<br />
                                Address: {lab.address.street_line_one}
                            </div>
                        ) : <div>not available</div>}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default Description;
