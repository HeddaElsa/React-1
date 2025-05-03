import typinggame from "../assets/typinggame.png";
import bhro from "../assets/Bhromaon.png";
import genesisPic from "../assets/genesis.png"
import Project from "../Components/Project.jsx";
import "./Portfolio.css";
import {useState} from 'react';
// import PopupWindow from "../Components/PopupWindow.jsx"


function Portfolio() {

    const [search, setSearch] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const [popupInfo, setPopupInfo] = useState({
        title: "Text",
        info: "more text",
    }
    )
    const [popOpen, setPopOpen] = useState(false);

    const openClose = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    const closePopup = () => {
        setPopOpen(false);
    }

    const projects = [
        {
        title:"Typing Game",
        projectImage: (typinggame),
        description: "A typing challenge game where you race against the clock to type as many words as possible. Each correct word adds bonus time, the harder the difficulty, the less time you gain.", 
        myrole: "Focused on implementing the game logic from a starter code",
        challange: "Making the end-game overlay function properly and look polished",
        learnings: "Gained experience with UI interaction, timers, and game logic in JavaScript.",
        repo: "https://github.com/HeddaElsa/typing-game-Hedda.git",
        techone: "JavaScript",
        techtwo: "CSS",
        },
        {             
        title:"Bhromoan",
        projectImage: (bhro),
        description: "Recreated a fully responsive website based on a Figma design, focusing on layout, styling, and mobile adaptability",
        myrole: "To build the website based on the Figma mockup.",
        challange: "Working under time pressure and meeting a tight deadline", 
        learnings: "Managing time effectively under pressure",
        repo: "https://github.com/HeddaElsa/Bhromaon.git",
        techone: "HTML",
        techtwo: "CSS",
        },
        {
        title:"Genesis",
        projectImage: (genesisPic),
        description: "Recreated a fully responsive website based on a Figma design wilth multiple pages, focusing on layout and styling.",
        myrole: "To build the website based on the Figma mockup with multiple pages",
        challange: "A lot of work, difficult to get it perfect",
        learnings: "Working with grid and flex",
        repo: "https://github.com/HeddaElsa/genesisproject.git",
        techone: "HTML",
        techtwo: "CSS",
        }
    ];

    return (
 
    <>
    <div className="appport__outer">

        <div>
            <button className="project__button" onClick={openClose}>
            See my Projects
            </button>
        </div>

        {isOpen && (
            <>
        <div className="searchbar__container">
            <input 
                type="text" 
                className="searchbar__input"
                placeholder="Search..."
                value={search}
                onChange={(e) => {
                setSearch(e.target.value);
                console.log(e.target.value);
                console.log("Search value:", search);
                }}
                
            />
        </div>
        {/* )
        }

        {isOpen && ( */}
        <div className="project__outer">
            {console.log("Projects array:", projects)}
            {projects
            .filter((project) => {
                const searchLower = search.trim().toLowerCase();
                return (
                    project.title.toLowerCase().includes(searchLower) ||
                    project.description.toLowerCase().includes(searchLower) ||
                    project.repo.toLowerCase().includes(searchLower)
                );
            })
            //     if (!search.trim()) return true; // Show all projects if search is empty
            //     const searchLower = search.toLowerCase();
            //     return (
            //         project.title.toLowerCase().includes(searchLower) ||
            //         project.description.toLowerCase().includes(searchLower) ||
            //         project.repo.toLowerCase().includes(searchLower)
            //     );
            // })
            // .filter((project) => {
            //     const searchLower = search.toLowerCase();
            //     return (
            //         project.title.toLowerCase().includes(searchLower) ||
            //         project.description.toLowerCase().includes(searchLower) ||
            //         project.repo.toLowerCase().includes(searchLower)
            //     );
            // })
            // .filter((project) => {
            //     console.log("Filtering:", project.title.toLowerCase(), "with search:", search.toLowerCase());
            //     return project.title.toLowerCase().includes(search.toLowerCase());
            // })
            // .filter((project) => {
            //     console.log("Filtering:", project.title.toLowerCase(), "with search:", search.toLowerCase());
            //     return project.title.toLowerCase().includes(search.toLowerCase());
            // })
            // .filter((project) => project.title.toLowerCase().includes(search.toLowerCase()))
            
            .map((item, index) => (
                <Project
                key={index}
                title={item.title}
                projectImage={item.projectImage} 
                description={item.description}
                myrole={item.myrole}
                challange={item.challange}
                learnings={item.learnings}
                repo={item.repo}
                techone={item.techone}
                techtwo={item.techtwo}
                />
            ))}

        </div>
        </>
        )}
    </div>
    </>
        );
}

export default Portfolio;