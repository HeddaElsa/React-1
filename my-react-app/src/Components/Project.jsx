import "./Project.css";
import {useState} from 'react';
import PopupWindow from "../Components/PopupWindow.jsx"

function Project(props) {

    const [popOpen, setPopOpen] = useState(false);

    const closePopup = () => {
        setPopOpen(false);
    }

    // const [popupInfo, setPopupInfo] = useState({
    //     projectImage: (props.projectImage),
    //     title: (props.title),
    //     description: (props.description),
    //     myrole: (props.myrole), 
    //     challange: (props.challange),
    //     learnings: (props.learnings),
    //     repo: (props.repo),
    //     techone: (props.techone),
    //     techtwo: (props.techtwo),
    // }
    // )

    return (
    <>
        <div onClick={() => setPopOpen(true)}>
            <div className="projectContainer">
                {/* <img src={popupInfo.projectImage}  */}
                <img src={props.projectImage} 
                alt="project image" 
                className="projectImage"/>
            </div>
        </div>
        {popOpen && (
        <PopupWindow 
        // image={popupInfo.projectImage} 
        // title={popupInfo.title} 
        // description={popupInfo.description} 
        // learnings={popupInfo.learnings} 
        // challange={popupInfo.challange} 
        // myrole={popupInfo.myrole} 
        // repo={popupInfo.repo} 
        // techone={popupInfo.techone} 
        // techtwo={popupInfo.techtwo} 
        // onClick={closePopup}
        image={props.projectImage}
        title={props.title}
        description={props.description}
        learnings={props.learnings}
        challange={props.challange}
        myrole={props.myrole}
        repo={props.repo}
        techone={props.techone}
        techtwo={props.techtwo}
        onClick={closePopup}
        />)}
    </>
    )
}

export default Project;