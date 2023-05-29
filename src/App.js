import React, {Component} from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import style from './style/App.css';
import uniqid from "uniqid";
import Experience from "./components/experience";
import PrintAll from "./components/renderAll";

class App extends Component{
  
  constructor(){
    super()

    this.state = {
      inputs:{
        text: '',
        id: uniqid(),
      },
      inputfields: [],
      editTaskId: null,
    }
  }
  
  handleChange = (e) =>{
    this.setState({
      inputs:{
        text: e.target.value,
        id:this.state.id,
      }
    })
  }

  onSumbitbtn = (e) =>{
    e.preventDefault();

    const { inputfields, inputs } = this.state;

    this.setState({
      inputfields: inputfields.concat(inputs),
      inputs:{
        text: '',
        id: uniqid(),
      }
    })
  }

  render(){
    return (
      <>  
        <div className="content">
            <Personal />
            <Education />
            <Experience />
            {/* <PrintAll /> */}
        </div>
      </>
    );
  }
}


export default App;