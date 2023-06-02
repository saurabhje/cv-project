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
      show:false,
      edit:null,
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
    e.target.value = ""
    this.setState(
      {
        ["show"]:true
        }
      );
  };
  render(){
    return (
      <div id="main">
        <div className="content">
            <Personal handleChange = {this.handleChange}  input = {this.state.inputs} />
            <Education />
            <Experience />
            <button className="subbtn" type="submit" onClick={this.onSubmitBtn}>Submit</button>
        </div> 
        <div className="rendering">{this.state.show && <PrintAll name = {this.state.firstname}
        lsname = {this.state.lastname}
        Address = {this.state.address}
        phone = {this.state.phone}
        email = {this.state.email}
        uni = {this.state.uniname}
        unicity = {this.state.unicity}
        degree = {this.state.degree}
        unistart = {this.state.unistart}
        uniend = {this.state.uniend}
        unisub = {this.state.subject} 
        />}
        </div>  
      </div>
    );
  }
}


export default App;