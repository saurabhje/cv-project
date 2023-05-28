import React, {Component} from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import style from './style/App.css';
import uniqid from "uniqid";
import Experience from "./components/experience";

class App extends Component{
  
  constructor(){
    super()

    this.state = {

    }
  }

  render(){
    return (
      <>  
        <div className="content">
            <Personal />
            <Education />
            <Experience />
            <button className="subbtn" type="submit">Submit</button>
        </div>
        
      </>
    );
  }
}

export default App;