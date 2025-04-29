import "./Project.css";
import {useState} from 'react';
import PopupWindow from "../Components/PopupWindow.jsx"

function Project(props) {

    const [popupInfo, setPopupInfo] = useState({
        image: (props.projectImage),
        title: (props.title),
        description: (props.description),
        myrole: (props.myrole), 
        challange: (props.challange),
        learnings: (props.learnings),
        repo: (props.repo),
        techone: (props.techone),
        techtwo: (props.techtwo),
    }
    )
    const [popOpen, setPopOpen] = useState(false);

    const closePopup = () => {
        setPopOpen(false);
    }

    return (<>
        <div onClick={() => setPopOpen(true)}>
        <div className="projectContainer">
            <img src={props.projectImage} alt="project image" className="projectImage"/>
            {/* <h2 className="title">{props.title}</h2> */}
            {/* <div className="descriptContainer">
                <div className="pContainer">
                    <h6>Description:</h6>
                    <p className="p">{props.description}</p>
                </div>
                <div className="pContainer">
                    <h6>Learnings:</h6>
                    <p className="p">{props.learnings}</p>
                </div>
                <div className="pContainer">
                    <h6>My role:</h6>
                    <p className="p">{props.myrole}</p>
                </div>
                <div className="pContainer">
                    <h6>Challanges</h6>
                    <p className="p">{props.challange}</p>
                </div>
            </div>
            <h4 className="repo">{props.repo}</h4> */}
            {/* <div className="buttonContainer"> */}
                {/* <button className="buttonproject">{props.techone}</button>
                <button className="buttonproject">{props.techtwo}</button>
            </div> */}
        </div>
        </div>
        {popOpen && <PopupWindow image={popupInfo.image} title={popupInfo.title} description={popupInfo.description} learnings={popupInfo.learnings} challange={popupInfo.challange} myrole={popupInfo.myrole} repo={popupInfo.repo} techone={popupInfo.techone} techtwo={popupInfo.techtwo} onClick={closePopup}/>}
    </>
    )
}

export default Project;