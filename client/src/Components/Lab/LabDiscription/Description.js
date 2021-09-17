import React, { Fragment, useState } from "react";
import './index.css';
import Popup from "../Popup/Popup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Logo from './logo.svg';
import Search from '../../../assets/search.svg'


const Description = ({ lab }) => {
  const [popup, setPopup] = useState(false);
  const [secondpop, setSecondpop] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


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
                <div className="appointment" onClick={() => setPopup(true)}>book appointment</div>
              </div>
              <Popup trigger={popup} setTrigger={setPopup}>
                <p id="test__heading">Book Appointment</p>
                <div className="appointment__container">
                  <div className="appointment__heading">
                    <div className="appointment__logo">
                      <img src={Logo} alt='logo' />
                      <p> {lab.name}</p>
                      <p>
                        {lab.address.city}, {lab.address.state}
                      </p>
                    </div>
                    <div className="appointment__date">
                      <p className="available__slot">Appointment Date</p>
                      <DatePicker id="date__picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>
                  <div className="time__component">
                    <p className="available__slot">20/11/2021 Available time slot</p>
                    <div className="slot__container">
                      <div className="slots">9:00 AM</div>
                      <div className="slots">10:00 AM</div>
                      <div className="slots">11:00 AM</div>
                      <div className="slots">12:00 PM</div>
                      <div className="slots">1:00 PM</div>
                      <div className="slots">3:00 PM</div>
                      <div className="slots">3:30 PM</div>
                      <div className="slots">4:00 PM</div>
                      <div className="slots">4:30 PM</div>
                      <div className="slots">5:00 PM</div>
                    </div>
                  </div>
                </div>
                <div className="cta__buttons">
                  <div className="slots" onClick={() => setPopup(false)}>Cancel</div>
                  <div className="book__now">Bokk Appointment</div>
                </div>
              </Popup>
              <p id="details"> <b>Address:</b> {lab.address.street_line_one}</p>
              <p id="details"><b>Hours:</b>  open - Closes 8PM</p>
              <p id="details"><b>Phone:</b> {lab.phone} </p>
              <p id="details"><b>Email:</b> {lab.email}</p>
              <div className="test__available">
                <p id="test__heading">Available Tests</p>
                <div className="buttons__">
                  <div className="test__tags" onClick={() => setSecondpop(true)}>Blood Test</div>
                  <div className="test__tags">HIV Test</div>
                  <div className="test__tags">Sugar Test</div>
                  <div className="test__tags">Heart Test</div>
                </div>
              </div>
              <Popup trigger={secondpop} setTrigger={setSecondpop}>
                <p id="test__heading">Book Appointment</p>
                <div className="appointment__container">
                  <div className="appointment__heading">
                    <div className="appointment__logo">
                      <img src={Logo} alt='logo' />
                      <p> {lab.name}</p>
                      <p>
                        {lab.address.city}, {lab.address.state}
                      </p>
                    </div>
                    <div className="appointment__date">
                      <p className="available__slot">Appointment Date</p>
                      <DatePicker id="date__picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                  </div>
                  <div className="time__component">
                    <p className="available__slot">20/11/2021 Available time slot</p>
                    <div className="slot__container">
                      <div className="slots">9:00 AM</div>
                      <div className="slots">10:00 AM</div>
                      <div className="slots">11:00 AM</div>
                      <div className="slots">12:00 PM</div>
                      <div className="slots">1:00 PM</div>
                      <div className="slots">3:00 PM</div>
                      <div className="slots">3:30 PM</div>
                      <div className="slots">4:00 PM</div>
                      <div className="slots">4:30 PM</div>
                      <div className="slots">5:00 PM</div>
                    </div>
                  </div>
                </div>
                <div className="cta__buttons">
                  <div className="slots" onClick={() => setSecondpop(false)}>Cancel</div>
                  <div className="book__now">Bokk Appointment Blood Test</div>
                </div>
              </Popup>

            </div>
          ) : (
            <div className="fallback__image">
              <img src={Search} alt="search" width="500px" height="500px" />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Description;
