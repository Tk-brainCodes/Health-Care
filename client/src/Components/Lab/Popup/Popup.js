import React from 'react';
import Cancel from '../../../assets/x.svg';


const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(0,0,0,0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "black",
                zIndex: "20",
            }}
        >
            <div className="popup__inner"
                style={{
                    position: "relative",
                    padding: "32px",
                    width: "100vw",
                    maxWidth: "70vw",
                    height: "auto",
                    backgroundColor: "#FFF",
                    borderRadius: "15px",
                    transition: "0.3s ease-in-out"
                }}
            >
                <button className="close__btn"
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        outline: "none",
                        border: "none",
                        background: "white",
                        cursor: "pointer"
                    }}

                    onClick={() => props.setTrigger(false)}
                > <div className="cancel__icon">
                        <img src={Cancel} alt="Cancelicon" />
                    </div></button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup;
