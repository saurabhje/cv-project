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

    this.handleEdit =  this.handleEdit.bind(this);
    console.log(this.state);

  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]:value}
      ); 
  };

  handleEdit = () =>{
    this.setState({
      edit: "value",
    })
    this.handleChange();
  }

  onSubmitBtn = (e) => {
    e.preventDefault();
    if(this.state.edit == null){
      e.target.value = ""
      this.setState(
        {
          ["show"]:true
          }
        );    
    }
    else{
      this.state.edit = null;
    }
  };

  

  render(){
    return (
      <>
      <h1 className="heading">
        CV-CREATOR
      </h1>
      <div id="main">
        <div className="content">
            <Personal handleChange = {this.handleChange} handleEdit = {this.handleEdit}/>
            <Education handleChange = {this.handleChange}/>
            <Experience handleChange = {this.handleChange} />

            <button className="subbtn" type="submit" onClick={this.onSubmitBtn}>Submit</button>
        </div> 
        <div className="rendering">
        {this.state.show && <PrintAll name = {this.state.firstname}
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
        position = {this.state.position}
        compname = {this.state.compname}
        compcity = {this.state.compcity}
        startyear = {this.state.startyear}
        endyear = {this.state.endyear}
        />}
        </div>  
      </div>
      </>
    );
  }
}


export default App;