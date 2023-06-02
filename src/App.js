import React, {Component} from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import style from './style/App.css';
import Experience from "./components/experience";
import PrintAll from "./components/renderAll";

class App extends Component{
  constructor() {
    super();
    this.state = {
      firstname: '',
      show:false,
    };
    console.log(this.state);

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)
    this.setState({
      [name]:value}
      );
  };

  onSubmitBtn = (e) => {
    e.preventDefault();
    this.setState({["show"]:true});
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
        {this.state.show && <PrintAll name = {this.state.firstname} />}   
      </>
    );
  }
}


export default App;