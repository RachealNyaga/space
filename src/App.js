import {useState} from "react"

// import "./components/Style.css"
import Main from './components/Main'
import Nav from './components/Nav'


function App() {
const [text,setText] = useState (
      ` <h4> So, you want to travel to</h4>
      <h2>SPACE</h2>
    <p>  Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!</p>
    
     </div>
        <div className='box2'> 
        <p>Explore </p>
    
        </div>
      </div>
     
      `
);

  return (
    <div className="App">
    
    <Nav/>
    <Main text={text}/>
    </div>
  )
}


export default App;