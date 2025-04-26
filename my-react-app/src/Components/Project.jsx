import "./Project.css";

function Project(props) {

    return (<>
        <div class="projectContainer">
            <img src={props.projectImage} alt="project image" className="projectImage"/>
            <h2 className="title">{props.title}</h2>
            <div className="descriptContainer">
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
            <h4 className="repo">{props.repo}</h4>
            <div className="buttonContainer">
                <button className="button">{props.techone}</button>
                <button classNAme="button">{props.techtwo}</button>
            </div>
        </div>
    </>
    )
}

export default Project;