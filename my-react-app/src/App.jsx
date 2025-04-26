import typinggame from "./assets/typinggame.png";
import bhro from "./assets/Bhromaon.png";
import genesisPic from "./assets/genesis.png"
import Project from "./Components/Project.jsx";


function App() {
 return (
  <>
  <div className="screen">
    <Project 
      title="Typing Game" 
      projectImage={typinggame} 
      description="A typing challenge game where you race against the clock to type as many words as possible. Each correct word adds bonus time, the harder the difficulty, the less time you gain." 
      myrole="Focused on implementing the game logic from a starter code" 
      challange="Making the end-game overlay function properly and look polished" 
      learnings="Gained experience with UI interaction, timers, and game logic in JavaScript."
      repo="https://github.com/HeddaElsa/typing-game-Hedda.git"
      techone= "JavaScript"
      techtwo= "CSS"
      />
    <Project 
      title="Bhromoan" 
      projectImage={bhro} 
      description="Recreated a fully responsive website based on a Figma design, focusing on layout, styling, and mobile adaptability" 
      myrole="To build the website based on the Figma mockup." 
      challange="Working under time pressure and meeting a tight deadline" 
      learnings="Managing time effectively under pressure"
      repo="https://github.com/HeddaElsa/Bhromaon.git"
      techone= "HTML"
      techtwo= "CSS"
      />
    <Project 
      title="Genesis" 
      projectImage={genesisPic} 
      description="Recreated a fully responsive website based on a Figma design wilth multiple pages, focusing on layout and styling." 
      myrole="To build the website based on the Figma mockup with multiple pages" 
      challange="A lot of work, difficult to get it perfect" 
      learnings="Working with grid and flex"
      repo="https://github.com/HeddaElsa/genesisproject.git"
      techone= "HTML"
      techtwo= "CSS"
      />
    </div>
  </>
 )
}

export default App;
