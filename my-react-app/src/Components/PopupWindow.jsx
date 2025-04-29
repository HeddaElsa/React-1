import React from "react";
import "./PopupWindow.css";

const PopupWindow = ({ image, title, description, learnings, challange, myrole, repo, techone, techtwo, onClick}) => {
    return (
        <div className="popup-window">
            <div className="projectContainer">
                <img src={image} alt="Popup__project image" className="projectImage"/>
                <h2 className="title">{title}</h2>
                <div className="descriptContainer">
                    <div className="pContainer">
                        <h6>Description:</h6>
                        <p className="p">{description}</p>
                    </div>
                    <div className="pContainer">
                        <h6>Learnings:</h6>
                        <p className="p">{learnings}</p>
                    </div>
                    <div className="pContainer">
                        <h6>My role:</h6>
                        <p className="p">{myrole}</p>
                    </div>
                    <div className="pContainer">
                        <h6>Challanges</h6>
                        <p className="p">{challange}</p>
                    </div>
                </div>
                <h4 className="repo">{repo}</h4>
                <div className="buttonContainer">
                    <button className="buttonproject">{techone}</button>
                    <button className="buttonproject">{techtwo}</button>
                </div>
                <button onClick={onClick} className="close-button">Close</button>
            </div>
        </div>
    )
}

export default PopupWindow;