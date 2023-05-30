import React, {Component} from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import uniqid from "uniqid";
import style from './style/App.css';
import Experience from "./components/experience";
import PrintAll from "./components/renderAll";

class App extends Component{
  constructor() {
    super();
    this.state = {
      inputs: {
        id: uniqid(),
      },
      inputfields: [],
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [name]: value,
      },
    }));
  };

  onSubmitBtn = (e) => {
    e.preventDefault();
  
    const { inputfields } = this.state;
  
    this.setState((prevState) => ({
      inputfields: inputfields.concat(prevState.inputs),
      inputs: {
        id: uniqid(),
      },
    }));
  };

  render(){
    return (
      <>  
        <div className="content">
            <Personal handleChange = {this.handleChange}  input = {this.state.inputs} />
            <Education />
            <Experience />
            <button className="subbtn" type="submit" onClick={this.onSubmitBtn}>Submit</button>
        </div>
        <div className="rendering">
          <PrintAll inputfields = {this.state.inputfields} />
        </div>
      </>
    );
  }
}


export default App;